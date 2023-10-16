import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById("root")).render(

  <div className='max-w-screen-xl  mx-auto' >
    <RouterProvider router={router} />
  </div>

)