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
import Category from './screens/Category/Category.jsx';
import Layout from './Layout/Layout.jsx';
import Forgotpassword from './screens/Login/Forgotpassword.jsx';
import { Provider } from 'react-redux';
import {store,persistor} from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import Cart from './screens/Cart/Cart.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />} >
        <Route path="/details/:prodid" element={<Details />} />
        <Route path="/:prodcategory" element={<Category />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/" element={<App />} />
        
        </Route>
  )
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>
 <RouterProvider router={router}/>
 </PersistGate>
  </Provider>,
)
