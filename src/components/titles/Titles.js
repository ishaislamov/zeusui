import React from 'react';
import './Titles.scss'

export const Titles = ({children}) => {
  return (
    <div>
        <h2 className='title'>{children.title}</h2>
        <h3 className='desc'>{children.desc}</h3>
    </div>
  )
}
