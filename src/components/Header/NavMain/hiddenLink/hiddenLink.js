import { useSelector } from "react-redux";
const ShowOnLogin = ({ children }) => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
// import { useSelector } from "react-redux";
// const ShowOnLogin = ({ children }) => {
//   const isLoggedIn = useSelector(state => state.user);

//   if (isLoggedIn) {
//     return children;
//   }
//   return null;
// };

// export const ShowOnLogout = ({ children }) => {
//   const isLoggedIn = useSelector(state => state.user);

//   if (!isLoggedIn) {
//     return children;
//   }
//   return null;
// };

// export default ShowOnLogin;
