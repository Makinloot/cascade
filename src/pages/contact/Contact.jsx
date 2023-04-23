import Button from '../../components/button/Button'
import PageTitle from '../../components/page-title/PageTitle'
import './Contact.scss'

const Contact = () => {
  return (
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
          <form action='#' className="contact-form">
            
            <span className="contact-form-title">
              What is your question?
            </span>
            
            <div className="contact-form-inputs">
              <input type="text" id='first-name' placeholder='First name' required />
              <input type="text" id='last-name' placeholder='Last name' required />
              <input type="email" id='email' placeholder='Email' required />
              <textarea cols="30" id='textarea' rows="7" placeholder='Message' required />
            </div>

            <div className="submit-btn flex-row">
              <input type="submit" value="Send message" />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact