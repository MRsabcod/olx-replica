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
const router = createBrowserRouter(
  [{
    path:"/",
    element:<App/>
  },{
    path:"/details/:prodid",
    element:<Details/>

  }
]
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
