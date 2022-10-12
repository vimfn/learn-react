import {Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss'

const Navabar = () => {
    return (
      <Fragment>
        <div className='navigation'>
      <Link className='logo-container' to='/'>
      <Logo className='logo'/>
      </Link>
      <div>
      <Link className='nav-links-container' to='/shop'>
      SHOP
      </Link>
      </div>
      </div>
      <Outlet/>
      </Fragment>
    )
  }

export default Navabar;