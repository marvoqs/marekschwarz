import React from 'react';

function Contact() {
  return (
    <>
      <section id='contact' className='container'>
        <h2>Contact Me</h2>
        <form action=''>
          <div className='contact-form'>
            <label for='firstName' id='nameLabel'>
              Name:
            </label>
            <input type='text' name='firstName' id='firstName' placeholder='First Name' />
            <input type='text' name='lastName' id='lastName' placeholder='Last Name' />
            <label for='email' id='emailLabel'>
              Email Address:
            </label>
            <input type='email' name='email' id='email' placeholder='Email Address' />
            <label for='message' id='messageLabel'>
              Your Message:
            </label>
            <textarea name='' rows='4' id='message' placeholder='Your Message'></textarea>
            <div id='submit-div'>
              <input type='submit' name='submit' id='submit' />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
