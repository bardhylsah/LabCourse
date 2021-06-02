import React from 'react';
import '../App/Layout/App.css';
import { Button } from './Button';
import './HeroSection.css';
import LoginForm from '../users/LoginForm';

function HeroSection () {
    return(
    <div className='hero-container'>
        <video src={require('../components/videos/video-1.mp4').default} autoPlay loop muted />
        <h1>Be Sure you get satisfied</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Get Started</Button>

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Book right-away <i className='fas fa-chevron-right'/></Button>
        </div>
    </div>
    )
}

export default HeroSection;