import React from 'react'
import moment from 'moment';
import like from '../assets/img/like.png'
import notLike from '../assets/img/not-like.png'
import { useWindowDimensions, cutText } from '../assets/js/General'



export default function List({ picture, name, description, lastUpdated, category, votes }){
    const { width } = useWindowDimensions();

    return (
        <div>
            <img src={picture} alt='Image List' className='img-list'/>
            <div className='container-list'>
            <span className='btn-my-vote-list'><img src={like} alt='Image like List' /></span>
                <div className='container-detail-list'>
                    <div className='text-list cols-40'>
                        <p className='name-list'>{name}</p>
                        <p className='description-list'>{cutText(width,description)}</p>
                    </div>
                    <div className='buttons-list cols-35'>
                        <p className='category-list'>{`${moment(lastUpdated, "YYYYMMDD").fromNow()} in ${category}`}</p>
                        <button className='btn-like-list'><img src={like} alt='Image like List' /></button>
                        <button className='btn-not-like-list'><img src={notLike} alt='Image not like List' /></button>
                        <button className='btn-vote-now-list'><p></p>Vote Now</button>
                    </div>
                </div>
                <div className='container container-percentage-list'>
                    <div className='teal-list cols-50'>
                        <p><img src={like} alt='Image like List' width='22' height='22'/>{`${votes.positive}%`}</p>
                    </div>
                    <div className='yellow-list cols-50'>
                        <p>{`${votes.negative}%`}<img src={notLike} alt='Image not like List' width='22' height='22'/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}