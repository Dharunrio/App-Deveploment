import React from 'react'
import privacy from '../Assets/CSS/privacy.css'

function Privacypolicy() {
    return (
      <div className="privacy-policy-container">
        <h2 className='headingterms'>Privacy Policy</h2>
        <p>
          Welcome to [Phonebook]! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application.
        </p>
        
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Your Name</li>
          <li>Contact Information (Phone Numbers)</li>
          <li>Email Address</li>
          <li>Profile Picture (optional)</li>
          <li>Location Data (if you enable location services)</li>
          <li>Device Information (e.g., device type, operating system)</li>
          <li>Usage Data (e.g., app analytics)</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Provide and maintain the app's functionality</li>
          <li>Personalize your experience</li>
          <li>Contact you regarding updates, changes, or support</li>
          <li>Analyze and improve our app</li>
          <li>Respond to your inquiries and provide support</li>
        </ul>
        
        <h2>3. Data Sharing and Disclosure</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>With third-party service providers who assist us in operating our app</li>
          <li>With your consent, for specific purposes</li>
          <li>In response to legal obligations or to protect our rights, privacy, safety, or property</li>
        </ul>
        
        {/* Add more sections as needed */}
        
        <h2>4. Security</h2>
        <p>We are committed to protecting your data and implement reasonable security measures to safeguard it. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        
        <h2>5. Your Choices</h2>
        <p>You can access, update, or delete your personal information by [describe the method for users to manage their data]. You may also opt-out of receiving promotional emails by following the instructions provided.</p>
        
        <h2>6. Children's Privacy</h2>
        <p>Our app is not intended for children under 13 years of age. We do not knowingly collect or solicit personal information from children. If you believe we have inadvertently collected such information, please contact us, and we will promptly delete it.</p>
        
        <h2>7. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy as our app evolves. We will notify you of any material changes through the app or via email.</p>
        
        <h2>8. Contact Us</h2>
        <p>If you have any questions, concerns, or requests related to your privacy or this Privacy Policy, please contact us at [contact information].</p>
      </div>
    );
  }
  
  export default Privacypolicy;