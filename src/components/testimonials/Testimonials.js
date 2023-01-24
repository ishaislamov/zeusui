import React from 'react';
import './Testimonials.scss';
import avatar1 from '../../images/feedback/1.png';
import avatar2 from '../../images/feedback/2.png';
import avatar3 from '../../images/feedback/3.png';


export const Testimonials = () => {
    return (
        <div className='feedback container'>
            <h1 className='title'>Testimonials</h1>
            <div className='feedback__items'>
                <div className='feedback__items-first'>
                    <div className='feedback__item'>
                        <div className='feedback__user'>
                            <img src={avatar1} className='feedback__avatar' />
                            <div className='feedback__userinfo'>
                                <p className='feedback__username'>Brooklyn Simmons</p>
                                <span className='feedback__url'>@brooklynsimmons</span>
                            </div>
                        </div>
                        <p className='feedback__text'>Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.</p>
                    </div>
                    <div className='feedback__item'>
                        <div className='feedback__user'>
                            <img src={avatar2} className='feedback__avatar' />
                            <div className='feedback__userinfo'>
                                <p className='feedback__username'>Dianne Russell</p>
                                <span className='feedback__url'>@DianneRussell</span>
                            </div>
                        </div>
                        <p className='feedback__text'>Eu luctus tincidunt vulputate praesent interdum proin. Magna gravida at pretium vitae. Viverra.</p>
                    </div>
                    <div className='feedback__item'>
                        <div className='feedback__user'>
                            <img src={avatar3} className='feedback__avatar' />
                            <div className='feedback__userinfo'>
                                <p className='feedback__username'>Eleanor Pena</p>
                                <span className='feedback__url'>@EleanorPena</span>
                            </div>
                        </div>
                        <p className='feedback__text'>Amet quam velit nisl et et. Fusce ante facilisi vulputate eget aliquet mi sem eu vulputate.</p>
                    </div>
                    <div className='feedback__item'>
                        <div className='feedback__user'>
                            <img src={avatar3} className='feedback__avatar' />
                            <div className='feedback__userinfo'>
                                <p className='feedback__username'>Eleanor Pena</p>
                                <span className='feedback__url'>@EleanorPena</span>
                            </div>
                        </div>
                        <p className='feedback__text'>Amet quam velit nisl et et. Fusce ante facilisi vulputate eget aliquet mi sem eu vulputate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
