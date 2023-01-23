import React from 'react';
import './Collection.scss';
import {Titles} from '../titles/Titles';

export const Collection = () => {

    const Collection = [
        {
            img: '',
            name: 'Moonbirds'
        },
        {
            img: '',
            name: 'Clone X - X Takashi Murakami',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: '',
            name: 'Mutant Ape Yacht Club',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        },
        {
            img: '',
            name: '"MOAR" by Joan Cornella',
            desc: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
        },
        {
            img: '',
            name: 'Doodles',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: '',
            name: 'KIWAMI Genesis',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        },
        {
            img: '',
            name: 'Arcade Land',
            desc: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
        },
        {
            img: '',
            name: 'Goons of Balatroon',
            desc: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
        },
        {
            img: '',
            name: 'Meta Toy DragonZ',
            desc: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
        }
    ]
    return (
        <div className='collection'>
                <h1 className='collection__title'></h1>
                <p className='collection__desc'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <div className='collection__block'>
                {Collection.map((collection, index) =>
                    <div className='collection__item' key={index}>
                        <img className='collection__img' src={collection.img} />
                        <p className='collection__name'>{collection.name}</p>
                        <p className='collection__desc'>{collection.desc}</p>
                    </div>)}
            </div>
        </div>

    )
}
