import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,Route
} from "react-router-dom";
import Details from './screens/Details/Details.jsx'
import Signin from './screens/Signin/Signin.jsx';
import Login from './screens/Login/Login.jsx';
const router = createBrowserRouter(
  [{
    path:"/",
    element:<App/>
  },{
    path:"/details/:prodid",
    element:<Details/>

  },{
    path:"/signin",
    element:<Signin/>

  },{
    path:"/login",
    element:<Login/>

  }
]
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
