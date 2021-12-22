import React from 'react'
import List from '../components/List'
import Card from '../components/Card'
import { celebrities } from '../assets/js/General'
import { useSelector, useDispatch } from 'react-redux'
import { changeTypeList } from "../redux/actions/actGlobal";
 
export default function Celebrities(){
    const typeList = useSelector(state => state.redGlobal.typeList);
    const dispatch = useDispatch()
    
    if(typeList == 'List'){
        return <CelebritiesList typeList='List' changeTypeList={(item)=> dispatch(changeTypeList(item))}/>;
    }else{
        return <CelebritiesCard typeList='Card' changeTypeList={(item)=> dispatch(changeTypeList(item))}/>;

    }
}



 function CelebritiesList({changeTypeList, typeList}){
    return (
        <div className='container-celebrities'>
            <div className='container-text-celebrities'>
                <div className='first-text-celebrities'>
                Speak out. Be heard.<br/><b>Be counted</b>
                </div>
                <div className='second-text-celebrities'> Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</div>
                <div className='close-text-celebrities'><b>X</b></div>
            </div>
            <div className='container-options-celebrities'>
                <div className='title-celebrities'>
                    <p>Previous Rulings</p>
                </div>
                <div className='option-celebrities'>
                    <select value={typeList} onChange={(event)=>changeTypeList(event.target.value)}>
                        <option value="List">List</option>
                        <option value="Card">Grid</option>

                    </select>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            {
                celebrities().map(({name, description, category, picture, lastUpdated, votes })=>{
                    return(
                        <List 
                            picture={picture} 
                            name={name} 
                            category={category}
                            lastUpdated={lastUpdated}
                            description={description}
                            votes={votes}
                        />

                    )
                })
            }
        </div>
    );
}

 function CelebritiesCard({changeTypeList, typeList}){
    return (
        <div className='container-celebrities-card'>
            <div className='container-options-celebrities-card'>
                <div className='title-celebrities-card'>
                    <p>Previous Rulings</p>
                </div>
                <div className='option-celebrities-card'>
                    <select value={typeList} onChange={(event)=>changeTypeList(event.target.value)}>
                        <option value="List">List</option>
                        <option value="Card">Grid</option>
                    </select>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='container-celebrities-card-info'>
                {
                    celebrities().map(({name, description, category, picture,picture_card, lastUpdated, votes })=>{
                        return(
                            <Card 
                                picture={picture_card} 
                                name={name} 
                                category={category}
                                lastUpdated={lastUpdated}
                                description={description}
                                votes={votes}
                            />

                        )
                    })
                }
            </div>
        </div>
    );
}