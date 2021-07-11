import React from 'react';
import '../App/Layout/App.css';
import { Button } from './Button';
import './HeroSection.css';
import LoginForm from '../users/LoginForm';
import { Link } from 'react-router-dom';

function HeroSection () {
    return(
    <div className='hero-container'>
        <h1>Need a car for your next trip?</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'><Link to='/SignUp'>Get Started</Link></Button>

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'><Link to='/SignUp'>Book right-away</Link> </Button>
        </div>
    </div>
    )
}

export default HeroSection;