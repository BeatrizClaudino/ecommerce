import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './screens/home.jsx'
import Login from './screens/Login.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={Rotas}/> */}
  </React.StrictMode>,
)
