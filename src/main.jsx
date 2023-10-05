import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Components/AuthProvider';
import MainRoutes from './Routes/MainRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={MainRoutes}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
