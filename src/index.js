import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'


const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient=new QueryClient();
root.render(
 <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen="false"  position='buttom-right'/>
 </QueryClientProvider>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

