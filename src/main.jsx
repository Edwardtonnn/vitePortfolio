import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"
import Mangan from './Mangan'
import ShipAndShore from './ShipAndShore'
import CheefBotanicals from './CheefBotanicals'
import Privacy from './Privacy'
import DeleteData from './DeleteData'

const router = createBrowserRouter([
  {
    path: "/",
    element:(<App/>)
  },
  {
    path:"/mangan",
    element:(<Mangan/>)
  },
  {
    path:"/shipandshore",
    element:(<ShipAndShore/>)
  },
  {
    path:"/cheefbotanicals",
    element:(<CheefBotanicals/>)
  },
  {
    path:"/privacy",
    element:(<Privacy/>)
  },
  {
    path:"/delete",
    element:(<DeleteData/>)
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
  
)
