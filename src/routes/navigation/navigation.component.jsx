import {Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss'

const Navabar = () => {
    return (
<Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
    )
  }

export default Navabar;