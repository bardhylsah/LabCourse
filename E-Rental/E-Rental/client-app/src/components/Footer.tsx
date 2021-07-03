import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer(){
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our Group to receive our best offers/deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" 
                    className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>About Us</h3>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Sponsors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h3>Contact Us</h3>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Videos</h3>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h3>Social Media</h3>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/'className="social-logo">
                            E-Rental <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className="website-rights">E-Rental © 2020</small>
                    <div className="social-icons">
                        <Link to="/" className="social-icon-link facebook" 
                        target="_blank"
                        aria-label='Facebook'>
                            <i className="fab fa-facebook-f"/>
                        </Link> 
                        <Link to="/" className="social-icon-link instagram" 
                        target="_blank"
                        aria-label='Instagram'>
                            <i className="fab fa-instagram"/>
                        </Link> 
                        <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i className='fab fa-youtube' />
                        </Link>
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className='fab fa-twitter' />
                        </Link>
                        <Link
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;