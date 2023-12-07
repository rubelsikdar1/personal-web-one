import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import routes from './Routes/Routers';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={routes}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
