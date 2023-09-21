// import axios from "axios";
// import { createContext, useContext, useMemo } from "react";


// export const AxiosContext = createContext()

// export const AxiosProvider = (children) => {
//     console.log(process.env.REACT_APP_API_BASE_URL)
//     const axiosProv = useMemo( () => {
//         const axiosProv = axios.create({
//             baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
            
        
//     })
//     console.log(axiosProv)  
   

//     // interceptor

//     axiosProv.interceptors.request.use((config) => {
//         console.log("entro axios interceptor")
//         const data = localStorage.getItem("authData") || null;
//         const authData = data ? JSON.parse(data) : null
//         console.log(data)
//         console.log(authData)

//         if(authData?.token){
//             config.headers.Authorization = `Bearer ${authData.token}`
//         }
//         return config
//     })

//     console.log("Axios")
//     console.log(axios)
//     return axios

//     }, [])


//     return (
//         <AxiosContext.Provider value={axios}>
//             {{children}}
//         </AxiosContext.Provider>
//     )
// }

// export function useAxios(){
//     return useContext(AxiosContext)
// }

// import React, { createContext, useContext } from 'react';
// import axios from 'axios';

// // Create the Axios context
// const AxiosContext = createContext();

// // Create a custom hook to access the Axios instance
// export function useAxios() {
//   return useContext(AxiosContext);
// }

// // Create a provider component to wrap your application
// export function AxiosProvider({ children }) {
//   // Create a custom Axios instance with your configuration
//   console.log(process.env.REACT_APP_API_BASE_URL)
//   const axiosInstance = axios.create({
//     baseURL: 'https://api-scaloneta-store.onrender.com/api/v1/',
//     timeout: 5000,
//     headers: {
//           'Content-Type': 'application/json',
//           // Add any other default headers here
//         },
//   });

//   // axiosInstance.interceptors.request.use((config) => {
//   //           console.log("entro axios interceptor")
//   //           const data = localStorage.getItem("authData") || null;
//   //           const authData = data ? JSON.parse(data) : null
//   //           console.log(data)
//   //           console.log(authData)
    
//   //           if(authData?.token){
//   //               config.headers.Authorization = `Bearer ${authData.token}`
//   //           }
//   //           return config
//   //       })

//   return (
//     <AxiosContext.Provider value={axiosInstance}>
//       {children}
//     </AxiosContext.Provider>
//   );
// }
import React, { createContext, useContext } from 'react';
import axios from 'axios';

const AxiosContext = createContext();

const AxiosProvider = ({ children }) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api-scaloneta-store.onrender.com/api/v1/', // Replace with your API base URL
    timeout: 5000, // Adjust the timeout as needed
  });

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

const useAxios = () => {
  const axiosInstance = useContext(AxiosContext);
  if (!axiosInstance) {
    throw new Error('useAxios must be used within an AxiosProvider');
  }
  return axiosInstance;
};

export { AxiosProvider, useAxios };