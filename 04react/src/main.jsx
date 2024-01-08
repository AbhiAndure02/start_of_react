import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'



const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element= { <Layout />} >
     

      </Route>


  )

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}>

 </RouterProvider>
  </React.StrictMode>,
)
