import React from 'react';
import '../Assets/CSS/ContactList.css';

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    phoneNumber: '+1 (123) 456-7890',
    email: 'john@example.com',
    address: '123 Main Street, City, Country'
  },
  {
    id: 2,
    name: 'Jane Smith',
    phoneNumber: '+1 (234) 567-8901',
    email: 'jane@example.com',
    address: '456 Elm Avenue, Town, Country'
  },
 
];

const ContactList = () => {
  return (
          <div>
          <center>
             <h2> Contact List</h2>
             <div className="list">
                {contacts.map((contact) => {
                   return (
                      <div className="contact">
                         <div className="name"> {contact.name} </div>
                         <div className="name1"> {contact.phoneNumber} </div>
                         <div className="name1"> {contact.email} </div>
                         <div className="name1"> {contact.address} </div>
                      </div>
                   );
                })}
             </div>
          </center>
       </div>
  );
};

export default ContactList;
