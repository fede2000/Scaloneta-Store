import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryProvider, MenuProvider } from './Context/Context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosProvider } from './Context/axiosContext';
 
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<AxiosProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <MenuProvider> 
            <CategoryProvider>
              <QueryClientProvider client={queryClient}>
                <App /> 
                <ReactQueryDevtools initialIsOpen={false}/>
              </QueryClientProvider>
            </CategoryProvider>   
          </MenuProvider>
    
        </PersistGate>
      </Provider>
      </AxiosProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
