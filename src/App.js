import { BrowserRouter, Route, Routes } from "react-router-dom";
//  Pages
import { Home, Contact, Login, Reset, Register} from "./pages/index"
//  Components
import { Header, Footer} from "./components"


import { onAuthStateChanged } from "firebase/auth"
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore"
import { useDispatch } from "react-redux"
import * as userActions from "./redux/user/user-actions"
import React, { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/GlobalStyles";

function onAuthStateChange (callback, action){
  onAuthStateChanged(auth, async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      onSnapshot(userRef, snapShot => callback(action({ id: snapShot.id, ...snapShot.data()})))
    } else {
      callback(action(null))
    }
})
}


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => unsuscribe;
  }, [dispatch]);

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <Header></Header>

          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/reset" element={ <Reset/> }/>
          </Routes>
   


        <Footer></Footer>
        
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
