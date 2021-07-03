import React from 'react';
import './contact.css';



const Contact = () => {
    return (
      <div id="form">

<div className="fish" id="fish"></div>
<div className="fish" id="fish2"></div>

<form id="waterform" method="post">

<div className="formgroup" id="name-form">
    <label className="name">Your name*</label>
    <input type="text" id="name" name="name" />
</div>

<div className="formgroup" id="email-form">
    <label className="email">Your e-mail*</label>
    <input type="email" id="email" name="email" />
</div>

<div className="formgroup" id="message-form">
    <label className="message">Your message</label>
    <textarea id="message" name="message"></textarea>
</div>

	<input type="submit" value="Send your message!" />
</form>
</div>
    );
  };
  
  export default Contact;