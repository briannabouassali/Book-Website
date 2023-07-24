import React from 'react';
import "../App";

const Footer = () => {
    return (
        <div className='footer'>
          <div className='footer-content'>
            <div className='footer-section'>
              <h3 className='footer-heading'>About</h3>
              <p>Welcome to our community of book lovers! We are a book website that allows you to get more information about the books you read.</p>
            </div>
            <div className='footer-section'>
              <h3 className='footer-heading'>Contact Us</h3>
              <p>Email: readwithus@gmail.com</p>
              <p>Phone Number: (613) 898-1023</p>
            </div>
          </div>
        </div>
      );
    };

export default Footer;