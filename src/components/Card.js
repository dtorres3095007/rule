import React, { useState, useEffect } from 'react';
import moment from 'moment';
import like from '../assets/img/like.png'
import notLike from '../assets/img/not-like.png'
import { useWindowDimensions, cutText, addVote, verifyVote, addClass, restarOpinion, opinionPeople ,getPercentage } from '../assets/js/General'



export default function Card({ picture, name, description, lastUpdated, category, votes, id }){
    const { width } = useWindowDimensions();
    const [vote, setVote] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [voteSend, setVoteSend] = useState(false);
    const [opinion, setOpinion] = useState('');

    const opinionCheck = () => opinion || voteSend ; 
    
    const sendOpinion = ()=> {
        if(opinionCheck()) {
            restarOpinion(id, ()=>{
                setOpinion('');
                setVoteSend(false);
                setVote(null);
                setPercentage(getPercentage(votes,''));
            });
        }else if(vote){
            addVote(vote.id, vote.opinion, ()=>{
            setVoteSend(true);
            setPercentage(getPercentage(votes,vote.opinion));
            })
        }
    }

    useEffect(() => {
        verifyVote(id,(opinion)=>{
            setOpinion(opinion);
            setPercentage(getPercentage(votes, opinion));
            }
        );
      },[]);
      
    return (
        <div className='container-card' style={{ backgroundImage :  `url(${picture})`}}>
            <span className={`btn-my-vote-card-${opinionPeople(votes, opinionCheck() ? opinion ? opinion : vote.opinion: '')}`}><img src={opinionPeople(votes, opinionCheck() ? opinion ? opinion : vote.opinion: '')== 'like' ? like : notLike} alt='Image like List' /></span>
            <div className='container-detail-card'>
                <div className='text-card'>
                    <p className='name-card'>{cutText(width,name,21)}</p>
                    <p className='description-card'>{cutText(width,description,73)}</p>
                </div>
                <div className='buttons-card'>
                        <p className='category-card'>{!opinionCheck() ? `${moment(lastUpdated, "YYYYMMDD").fromNow()} in ${category}` : 'Thank you for your vote!'}</p>
                        { !opinionCheck() &&
                        <>
                            <button className={`btn-like-card ${addClass('like',vote)}`} onClick={()=> setVote({id,opinion : 'like'})}><img src={like} alt='Image like List' /></button>
                            <button className={`btn-not-like-card ${addClass('not-like',vote)}`} onClick={()=> setVote({id,opinion : 'not-like'})}><img src={notLike} alt='Image not like List' /></button>
                        </>
                        }
                        <button style={{ marginBottom : opinionCheck() && '1px'}} className={`btn-vote-now-card`}  onClick={()=> sendOpinion() }><p></p>{`${!opinionCheck() ?'Vote Now':'Vote Again'}`}</button>
                </div>
                <div className='container container-percentage-card' >
                <div className={`teal-card ${percentage ? `cols-percentage-${percentage.positive}` : 'cols-50'}`}>
                        <p><img src={like} alt='Image like List' width='22' height='22'/>{`${percentage && percentage.positive}%`}</p>
                    </div>
                    <div className={`yellow-card ${percentage ? `cols-percentage-${percentage.negative}` : 'cols-50'}`}>
                        <p>{`${percentage && percentage.negative}%`}<img src={notLike} alt='Image not like List' width='22' height='22'/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}