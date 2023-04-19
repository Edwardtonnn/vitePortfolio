import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function DeleteData() {
  return (
  <>
  <Header/>
  <div className="container-fluid py-5 my-5">
    <div className="row">
      <div className="col text-white">
      <h1>Data Deletion Instructions</h1>
  
  <p>Your privacy is important to us. If you wish to have your data deleted, please follow the instructions below. However, please note that we currently do not collect any personal data on this website.</p>
  
  <h2>Contact Us for Data Deletion</h2>
  <p>If you believe we have any personal data about you and you wish to have it deleted, please contact us via email at:</p>
  <p><a href="mailto:egsingleton@aol.com">Egsingleton@aol.com</a></p>
  
  <p>Include the following information in your email:</p>
  <ul>
    <li>Your full name</li>
    <li>Your email address</li>
    <li>A description of the data you believe we have about you</li>
  </ul>
  
  <p>We will review your request and respond within a reasonable time frame. If we find any personal data about you, we will take appropriate steps to delete it.</p>
  
  <h2>No Data Collection</h2>
  <p>As mentioned earlier, we currently do not collect any personal data on this website. If our data collection practices change in the future, we will update our Privacy Policy and Data Deletion Instructions accordingly.</p>
  
  <h2>Contact Us</h2>
  <p>If you have any questions or concerns about our data deletion practices, please feel free to contact us at <a href="mailto:egsingleton@aol.com">Egsingleton@aol.com</a>.</p>

      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default DeleteData
