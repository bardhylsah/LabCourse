import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./contact.css";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

function ContactUs(){
  return(
      <div className="h-full flex justify-center flex-col">
        <div className="w-2/3 m-auto p-8 shadow-lg">
          <h1 className="text-4xl font-bold flex items-center">
             <svg 
             xmlns="http://www.w3.org/2000/svg" 
             className="h-12 transform rotate-45" 
             viewBox="0 0 20 20" 
             fill="currentColor">
  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
</svg>
           <span>Contact Us</span> 
          </h1>
          <form >
            <button >
              Submit</button>
          </form>
        </div>
      </div>

  );
}

export default ContactUs;
