import React from 'react';
import './Company.scss'
import Logo1 from '../../images/company/01.svg'
import Logo2 from '../../images/company/02.svg'
import Logo3 from '../../images/company/04.svg'
import Logo4 from '../../images/company/27.svg'
import Logo5 from '../../images/company/28.svg'
import Logo6 from '../../images/Logo.svg'


export const Company = () => {
  return (
    <div className='company container'>
        <img  src={Logo1} className='company__item'/>
        <img  src={Logo2} className='company__item'/>
        <img  src={Logo6} className='company__item'/>
        <img  src={Logo3} className='company__item'/>
        <img  src={Logo4} className='company__item'/>
        <img  src={Logo5} className='company__item'/>
    </div>
  )
}
