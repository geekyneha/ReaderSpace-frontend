import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AddBooks from './Components/AddBooks/AddBooks'
import Collection from './Components/Collection/Collection.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },{
     path:'/addbooks',
     element:<AddBooks/>
  },
  {
    path:'/browse/collection',
    element:<Collection/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)