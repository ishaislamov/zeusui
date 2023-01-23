import React from 'react';
import './Ourteam.scss'
import Person1 from '../../images/team/1.svg'
import Person2 from '../../images/team/2.png'
import Person3 from '../../images/team/3.png'
import Person4 from '../../images/team/4.png'

const Team = [
    {
        avatar: Person1,
        name: 'Guy Hawkins',
        position: 'CEO'
    },
    {
        avatar: Person2,
        name: 'Jane Cooper',
        position: 'COO'
    },
    {
        avatar: Person3,
        name: 'Darrell Steward',
        position: 'CTO'
    },
    {
        avatar: Person4,
        name: 'Dianne Russell',
        position: 'CDO'
    }
]

export const Ourteam = () => {
    return (
        <div className='team container'>
            <h1 className='team__title'>Our Team</h1>
            <p className='team__desc'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincid unt. </p>
            <div className='team__items'>
            {Team.map((team, index) =>
                <div className='team__item' key={index}>
                    <img className='team__avatar' src={team.avatar} />
                    <p className='team__name'>{team.name}</p>
                    <p className='team__position'>{team.position}</p>
                </div>)}
            </div>

        </div>
    )
}
