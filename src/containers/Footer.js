import React from 'react'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import { useSelector } from 'react-redux';


export default function Footer(){
    const typeList = useSelector(state => state.redGlobal.typeList);

    return (
        <div className={`footer ${typeList == 'List' ? 'footer-list' : 'footer-card'}`}>
            <div className='footer-image'>
                <div className='footer-text'>
                    Is there anyone else you would want us to add?
                </div>
                <div className='footer-btn'>
                    <button>Submit a name</button>
                </div>
            </div>
            <div className='footer-media'>
                <div className='footer-option-text'>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='footer-option-media'>
                    <ul>
                        <li>Follow us</li>
                        <li><img onClick={()=>window.open('https://web.facebook.com/')}src={facebook}/></li>
                        <li><img onClick={()=>window.open('https://twitter.com/')} src={twitter}/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}