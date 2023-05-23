import Button from '../../components/button/Button'
import PageTitle from '../../components/page-title/PageTitle'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Popup from './Popup';
import './Contact.scss'

const Contact = () => {

  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuc1bbn', 'template_d6asb9c', form.current, '9l3cTZYtpYJkIq8jV')
      .then((result) => {
          setShowPopup(true);
      }, (error) => {
          alert('something went wrong, please try again')
      });
      e.target.reset()
  };


  return (
    <>
      <Popup 
        handlePopup={showPopup}
        setHandlePopup={setShowPopup}
      />
    <div className="contact">
      <PageTitle page="contact" />
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-email">
            Email: <span>ramzibabluani@icloud.com</span>
          </div>
          <div className="contact-phone">
            Phone: <span>+34 624 855823</span>
          </div>
          <form 
            action='#' 
            className="contact-form"
            onSubmit={sendEmail}
            ref={form}
          >
            
            <span className="contact-form-title">
              What is your question?
            </span>
            
            <div className="contact-form-inputs">
              <input 
                type="text" 
                id='first-name' 
                name='name'
                placeholder='First name' 
                required
              />
              <input 
                type="text" 
                id='last-name' 
                name='subject'
                placeholder='Subject' 
                required
              />
              <input 
                type="email" 
                id='email' 
                name='email'
                placeholder='Email' 
                required
              />
              <textarea 
                cols="30" 
                id='textarea' 
                name='text'
                rows="7" 
                placeholder='Message' 
                required 
              />
            </div>

            <div className="submit-btn flex-row">
              <input type="submit" value="Send message" />
            </div>

          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact