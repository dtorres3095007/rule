import React, { useState, useEffect } from 'react';
import moment from 'moment';
import like from '../assets/img/like.png'
import notLike from '../assets/img/not-like.png'
import { useWindowDimensions, cutTextDescriptionList, addVote, verifyVote, addClass, restarOpinion, opinionPeople ,getPercentage} from '../assets/js/General'



export default function List({ picture, name, description, lastUpdated, category, votes, id }){
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
                setPercentage(getPercentage(votes,id));
            });
        }else if(vote){
            addVote(vote.id, vote.opinion, ()=>{
            setVoteSend(true);
            setPercentage(getPercentage(votes,id));
            })
        }
    }

    useEffect(() => {
        verifyVote(id,(opinion)=>{
            setOpinion(opinion);
            setPercentage(getPercentage(votes, id));
            }
        );
      },[]);

    return (
        <div data-testid={`list-${id}`}>
            <img src={picture} alt='Image List' className='img-list'/>
            <div className='container-list'>
            <span className={`btn-my-vote-list-${opinionPeople(votes, opinionCheck() ? opinion ? opinion : vote.opinion: '')}`}><img src={opinionPeople(votes, opinionCheck() ? opinion ? opinion : vote.opinion: '')== 'like' ? like : notLike} alt='Image like List' /></span>
                <div className='container-detail-list'>
                    <div className='text-list cols-40'>
                        <p className='name-list'>{name}</p>
                        <p className='description-list'>{cutTextDescriptionList(width,description)}</p>
                    </div>
                    <div className='buttons-list cols-35'>
                        <p className='category-list'>{!opinionCheck() ? `${moment(lastUpdated, "YYYYMMDD").fromNow()} in ${category}` : 'Thank you for your vote!'}</p>
                        { !opinionCheck() &&
                        <>
                            <button className={`btn-like-list ${addClass('like',vote)}`} onClick={()=> setVote({id,opinion : 'like'})}><img src={like} alt='Image like List' /></button>
                            <button className={`btn-not-like-list ${addClass('not-like',vote)}`} onClick={()=> setVote({id,opinion : 'not-like'})}><img src={notLike} alt='Image not like List' /></button>
                        </>
                        }
                        <button className={`btn-vote-now-list`}  onClick={()=> sendOpinion() }><p></p>{`${!opinionCheck() ?'Vote Now':'Vote Again'}`}</button>
                    </div>
                </div>
                <div className='container container-percentage-list' >
                    <div className={`teal-list ${percentage ? `cols-percentage-${percentage.positive}` : 'cols-50'}`}>
                        <p><img src={like} alt='Image like List' width='22' height='22'/>{`${percentage && percentage.positive}%`}</p>
                    </div>
                    <div className={`yellow-list ${percentage ? `cols-percentage-${percentage.negative}` : 'cols-50'}`}>
                        <p>{`${percentage && percentage.negative}%`}<img src={notLike} alt='Image not like List' width='22' height='22'/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}