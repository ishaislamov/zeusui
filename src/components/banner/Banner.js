import React from 'react';
import './Banner.scss';
import Banner1 from '../../images/banner1.png';
import Banner2 from '../../images/banner2.png';
import Banner3 from '../../images/banner3.png';
import Banner4 from '../../images/banner4.png';


export const Banner = () => {
  return (
    <div className='banner container'>
        <div className='banner__bg'></div>
        <img className="banner__img1" src={Banner1}/>
        <img className="banner__img2" src={Banner2}/>
        <img className="banner__img3" src={Banner3}/>
        <img className="banner__img4" src={Banner4}/>
        <h1 className='banner__title'>
        Create & sell <br /> your NFTs today
        </h1>
        <p className='banner__desc'>
        Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum morbi. Volutpat libero curabitur feugiat risus dui pulvinar. Elementum.
        </p>
        <a className='banner__btn'>
        Let’s sell
        </a>
    </div>
  )
}
