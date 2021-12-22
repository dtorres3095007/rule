import React from 'react'
import pope from '../assets/img/pope.png'
import search from '../assets/img/search.svg'
import { useWindowDimensions, cutTextDescriptionList } from '../assets/js/General'



export default function Header(){
    const { width } = useWindowDimensions();

    return (
        <div className='header' style={{ backgroundImage : `url(${pope})`}}>
            <div className='header-menu'>
                <div className='header-title'>
                    <p>Rule of thumb</p>
                </div>
                <div className='header-option'>
                    <ul>
                        <li>Past Trials</li>
                        <li>How It Works</li>
                        <li>Login / Sign Up</li>
                        <li><img src={search} alt='Search Info'/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}