import React from 'react';
import './header.scss';
import Logo from '../../images/Logo.svg'

export const Header = () => {
  return (
        <header className='header'>
            <ul className='header__menu-left'>
                <li><a className='header__menu_link'>Home</a></li>
                <li><a className='header__menu_link'>University</a></li>
                <li><a className='header__menu_link'>Courses</a> </li>
            </ul>
            <div className='header__logo'>
                <a className='header__logo'>
                    <img src={Logo} alt='Logo'/>
                </a>
            </div>
            <ul className='header__menu-right'>
                <li><a className='header__menu_link'>Home</a></li>
                <li><a className='header__menu_link'>University</a></li>
                <li><a className='header__menu_link'>Courses</a> </li>
            </ul>
        </header>
    )
}

