import React from "react";
import Header from "../components/Header";


function Support() {
  return (
    <div>
      <Header />
      <div className="background">
        <div className="background_content">
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt beatae amet eligendi facere ab adi
          </p>
        </div>
      </div>
      <div className="contect_container">
        <div className="contect_info">
          <h2>Contact Information</h2>
          <p>Tell Us What You Feel</p>
          <div className="details">
            <div className="info">
              <i class="fas fa-phone"></i>
              <div className="phone">
                <span>+91 0942384377</span>
                <span>+91 0987813376</span>
              </div>
            </div>
            <div className="info">
              <i class="fas fa-envelope"></i>
              <span>singh@mail.com</span>
            </div>
            <div className="info">
              <i class="fas fa-map-marker"></i>
              <span>Begusarai Bihar ,INDIA</span>
            </div>
          </div>
        </div>
        <div className="contect_inputfeild">
          <div className="name_mail">
            <div className="name">
              <h4>Your Name</h4>
              <input
                className="input"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="name">
              <h4>Your Email</h4>
              <input
                className="input"
                type="email"
                placeholder="Enter Your email"
              />
            </div>
          </div>
          <div className="subject">
            <h4>Subject</h4>
            <input
              className="input"
              type="email"
              placeholder="Enter Your Subject"
            />
          </div>
          <div className="description">
            <h4>Message</h4>
            <textarea
              className="input"
              type="text"
              placeholder="Write Here Your Message"
            />
          </div>
          <button className="genButton">Send Messaage</button>
        </div>
      </div>
    </div>
  );
}

export default Support;
