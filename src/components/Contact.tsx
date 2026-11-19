import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hr01829018@gmail.com" data-cursor="disable">
                hr01829018@gmail.com
              </a>
            </p>
            <h4>Discord</h4>
            <p>harvixplayz__</p>
          </div>
          <div className="contact-box">
            <h4>Location</h4>
            <p>India</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Harshit Rawat</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
