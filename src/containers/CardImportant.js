import React from 'react'
import like from '../assets/img/like_x2.png'
import notLike from '../assets/img/not_like_x2.png'
import wikipedia from '../assets/img/wikipedia.svg'



export default function CardImportant(){
    return (
        <div className='container-card-important'>
            <div className='container-detail-card-important'>
                <p className='initial-text-card-important'>What’s your opinion on</p>
                <p className='title-card-important'>Pope Francis?</p>
                <p className='text-card-important'> He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                <p onClick={()=> window.open('https://es.wikipedia.org/wiki/Francisco_(papa)')} className='initial-text-card-important hide-text'> <img src={wikipedia} alt='Wikipedia Image'/>More information</p>
                <p className='end-text-card-important'> <b>What’s Your Veredict?</b></p>
            </div>
            <div className='container container-percentage-card-important'>
                <div className='teal-card-important cols-50'>
                    <p><img src={like} alt='Image like List' width='22' height='22'/></p>
                </div>
                <div className='yellow-card-important cols-50'>
                    <p><img src={notLike} alt='Image not like List' width='22' height='22'/></p>
                </div>
            </div>
        </div>
    );
}