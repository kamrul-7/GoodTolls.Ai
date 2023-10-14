import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById("root")).render(

        <div className='max-w-screen-xln mx-auto' >
          <RouterProvider router={router} />
        </div>

)