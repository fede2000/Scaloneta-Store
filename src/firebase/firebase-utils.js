import { initializeApp } from 'firebase/app';
import {  toast } from 'react-toastify';

import {
  firebaseConfig,
  actionCodeSettingsVerification,
  actionCodeSettingsForgotPassword,
} from './firebase-config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,GoogleAuthProvider
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  query,
  orderBy,
  collection,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const createUserProfileDocument = async userAuth => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = getAuth();
auth.useDeviceLanguage();

// Create User

export const registerWithEmailAndPassword = async (email, password, displayName) => {
  try {

    const { user } = await createUserWithEmailAndPassword(auth,email, password)
    localStorage.setItem('username', displayName);
    await createUserProfileDocument(user,displayName);
    return user;
  } catch (error) {
    console.error('Error registering user', error.message);
    return null;
  }
};

export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then(userCredential =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      toast.success(`Mensaje de verificación enviado al mail ${email}`);
      localStorage.setItem('username', displayName);
    })
  );

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = email =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => toast.success(`Mail de recupero de contraseña enviado a ${email}`)
  );

// Ordenes
export const createOrderDocument = async order => {
  // si no hay orden retorna
  if (!order) return;

  const orderRef = doc(firestore, `orders/${order.orderId}`);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    // se guarda la fecha cuando se creo
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `orders/${order.orderId}`), {
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.cartItems],
        price: order.price,
        shippingCost: order.shippingCost,
        total: order.total,
        status: 'pending',
        createdAt,
      });
    } catch (error) {
      console.log('Error creating order', error.message);
    }
  }

  return orderRef;
};

// Obtener ordenes de la db
export const getOrders = async (userId, currentOrdersInRedux, cb, action) => {
  if (!userId) throw new Error('');

  const getOrdersQuery = query(
    collection(firestore, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  //Setear las ordenes
  let orders = await getDocs(getOrdersQuery)
    .then(querySnapshot => {
      let orders = [];

      querySnapshot.forEach(async document => {
        orders = [...orders, { id: document.id, ...document.data() }];
        const orderRef = doc(firestore, `orders/${document.id}`);

        let documentStatus = document.data().status;
        if (!currentOrdersInRedux) {
          onSnapshot(orderRef, snapShot => {
            const staleData = snapShot.get('status') !== documentStatus;
            documentStatus = snapShot.get('status');
            staleData && cb(action(userId));
          });
        }
      });
      return orders;
    })
    .catch(error => console.error('Error al obtener las ordenes', error));

  return orders;
};


const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
