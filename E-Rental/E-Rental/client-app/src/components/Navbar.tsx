import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useStore } from '../App/store/useStore';
import LoginForm from '../users/LoginForm';
import { NavLink } from 'react-bootstrap';
import { Dropdown, Image, Menu } from 'semantic-ui-react';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { userStore: { user, logout, isLoggedIn } } = useStore();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            E-Rental
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Vehicles
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/locations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Locations
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact-Us
              </Link>
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button link to='/login' buttonStyle='btn--outline'>SIGN UP</Button>}
          <>
          <Menu.Item position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left'  text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                </>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;