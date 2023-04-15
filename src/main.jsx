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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
  
)
