import React from 'react';
import './Provide.scss';
import img1 from '../../images/provide/1.svg';
import img2 from '../../images/provide/2.svg';
import img3 from '../../images/provide/3.svg';
import img4 from '../../images/provide/4.svg';


export const Provide = () => {
    const Provides = [
        {
            img: img1,
            title: 'Host your NFTs',
            desc: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices'
        },
        {
            img: img2,
            title: 'See your sales',
            desc: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus '
        },
        {
            img: img3,
            title: 'Secure wallet',
            desc: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
        },
        {
            img: img4,
            title: 'No scam',
            desc: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
        }
    ]
    return (
        <div className='provide container'>
            <h1 className='title'>We Provide</h1>
            <p className='desc'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <div className='provide__items'>
                {Provides.map((provides, index) =>
                    <div
                        className='provide__item'
                        key={index}>
                        <img src={provides.img} />
                        <h3 className='provide__title'>{provides.title}</h3>
                        <p className='provide__desc'>{provides.desc}</p>
                    </div>)}
            </div>
        </div>
    )
}
