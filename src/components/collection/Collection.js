import React from 'react';
import './Collection.scss';
import img1 from '../../images/collections/1.png';
import img2 from '../../images/collections/2.png'
import img3 from '../../images/collections/3.png'
import img4 from '../../images/collections/4.png'
import img5 from '../../images/collections/5.png'
import img6 from '../../images/collections/6.png'
import img7 from '../../images/collections/7.png'
import img8 from '../../images/collections/8.png'
import img9 from '../../images/collections/9.png'


export const Collection = () => {

    const Collection = [
        {
            img: img1,
            name: 'Moonbirds'
        },
        {
            img: img2,
            name: 'Clone X - X Takashi Murakami',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: img3,
            name: 'Mutant Ape Yacht Club',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        },
        {
            img: img4,
            name: '"MOAR" by Joan Cornella',
            desc: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
        },
        {
            img: img5,
            name: 'Doodles',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: img6,
            name: 'KIWAMI Genesis',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        },
        {
            img: img7,
            name: 'Arcade Land',
            desc: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
        },
        {
            img: img8,
            name: 'Goons of Balatroon',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: img9,
            name: 'Meta Toy DragonZ',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        }
    ]
    return (
        <div className='collection container'>
                <h1 className='collection__title'>Hottest Collections</h1>
                <p className='collection__desc'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <div className='collection__block'>
                {Collection.map((collection, index) =>
                    <div className='collection__item' key={index}>
                        <img className='collection__item-img' src={collection.img} />
                        <p className='collection__item-name'>{collection.name}</p>
                        <p className='collection__item-desc'>{collection.desc}</p>
                    </div>)}
            </div>
        </div>

    )
}
