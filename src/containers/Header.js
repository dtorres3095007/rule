import React from 'react'
import list from '../assets/img/list.png'
import search from '../assets/img/search.svg'
import triangle from '../assets/img/triangle.png'
import CardImportant from '../components/CardImportant';



export default function Header(){
    return (
        <div className='header'>
            <div className='header-menu'>
                <div className='header-title'>
                    <p>Rule of thumb.</p>
                </div>
                <div className='header-option'>
                    <div className='header-option-desktop'>
                        <ul>
                            <li>Past Trials</li>
                            <li>How It Works</li>
                            <li>Login / Sign Up</li>
                            <li><img src={search} alt='Search Info'/></li>
                        </ul>
                    </div>
                    <div className='header-option-app'>
                        <img  src={list} alt='Menu'/>
                    </div>
                </div>
            </div>
            <div className='header-card'>
                <CardImportant/>
            </div>
            <div className='header-close'>
                <div className='header-close-info'>CLOSING IN <img src={triangle}/></div>
                <div className='header-close-day'><b>22</b>days</div>
            </div>
        </div>
    );
}