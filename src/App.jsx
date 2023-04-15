import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

function App() {  

  return (
    <>
    <head>
    <title>Portfolio</title> 
    </head>
   
      <Header/>
      <Homepage/>
      <Footer />

      
    
    </>
  )
}

export default App
