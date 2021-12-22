import React from 'react'
import moment from 'moment';
import like from '../assets/img/like.png'
import notLike from '../assets/img/not-like.png'
import { useWindowDimensions, cutText } from '../assets/js/General'



export default function Card({ picture, name, description, lastUpdated, category, votes }){
    const { width } = useWindowDimensions();

    return (
        <div className='container-card' style={{ backgroundImage :  `url(${picture})`}}>
            <div className='container-detail-card'>
                <div className='text-card'>
                    <p className='name-card'>{cutText(width,name,21)}</p>
                    <p className='description-card'>{cutText(width,description,73)}</p>
                </div>
                <div className='buttons-card'>
                        <p className='category-card'>{`${moment(lastUpdated, "YYYYMMDD").fromNow()} in ${category}`}</p>
                        <button className='btn-like-card'><img src={like} alt='Image like List' /></button>
                        <button className='btn-not-like-card'><img src={notLike} alt='Image not like List' /></button>
                        <button className='btn-vote-now-card'><p></p>Vote Now</button>
                </div>
                <div className='container container-percentage-card'>
                    <div className='teal-card cols-50'>
                        <p><img src={like} alt='Image like List' width='22' height='22'/>{`${votes.positive}%`}</p>
                    </div>
                    <div className='yellow-card cols-50'>
                        <p>{`${votes.negative}%`}<img src={notLike} alt='Image not like List' width='22' height='22'/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}