import React, { useState } from 'react';
import FAQ from '../Assets/CSS/FAQ.css'

const Faq = () => {
  const [faqs, setFaqs] = useState([
    { question: 'How do I add a new contact?', answer: 'You can add a new contact by clicking the "Add Contact" button and filling out the required information.' },
    { question: 'Can I edit an existing contact?', answer: 'Yes, you can edit an existing contact by clicking the "Edit" button next to the contact you want to modify.' },
    { question: 'How do I delete a contact?', answer: 'To delete a contact, select the contact you want to remove and click the "Delete" button.' },
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${faq.open ? 'open' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <div className={`faq-toggle ${faq.open ? 'open' : ''}`}></div>
            </div>
            <div className="faq-answer">{faq.open && faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
