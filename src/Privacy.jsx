import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Privacy() {
  const today = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);


  return (
    <>
    <Header/>
<div className="container-fluid py-5 my-5">
  <div className="row">
    <div className="col text-white">
    <h1 className="py-4">Privacy Policy</h1>
  <p >Last updated: <span className="fw-bold">{formattedDate}</span></p>

  <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or use our portfolio website.</p>

  <h2 className="py-4">Information Collection and Use</h2>
  <p>While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, and phone number ("Personal Information").</p>

  <h2 className="py-4">Log Data</h2>
  <p>Like many site operators, we collect information that your browser sends whenever you visit our website ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

  <h2 className="py-4">Cookies</h2>
  <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

  <h2 className="py-4">Security</h2>
  <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

  <h2 className="py-4">Links to Other Sites</h2>
  <p>Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

  <h2 className="py-4">Changes to This Privacy Policy</h2>
  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

  <h2 className="py-4">Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, please contact us at <span className="fw-bold">Edwardtonnn@gmail.com</span>.</p>

    </div>
  </div>
</div>
<Footer/>
 


    
    </>
  )
}

export default Privacy
