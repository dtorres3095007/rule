import React, { useState } from 'react';
import list from '../assets/img/list.png'
import search from '../assets/img/search.svg'
import triangle from '../assets/img/triangle.png'
import CardImportant from './CardImportant';



export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header'>
            {

                menuOpen &&
                <div className='header-menu-app'>
                        <div className='header-item-app'>
                            <button onClick={()=>setMenuOpen(false)}>X</button>
                            <h2>Menu</h2>
                            <ul>
                                <li>Past Trials</li>
                                <li>How It Works</li>
                                <li>Login / Sign Up</li>
                                <li><img src={search} alt='Search Info'/></li>
                            </ul>
                        </div>
                </div>
            }
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
                        <img onClick={()=>setMenuOpen(true)} src={list} alt='Menu'/>
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