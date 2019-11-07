import React from 'react';
import './styles.scss';
import Logo from '../../assets/Logo/Logo.jpg';

const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-test='logoComponent' src={Logo} alt='Logo' />
        </div>
      </div>
    </header>
  )
}

export default Header;
