import React from 'react'
import List from '../components/List'
import { celebrities } from '../assets/js/General'

export default function Celebrities({}){
    return (
        <div className='container-celebrities'>
            <div className='container-options-celebrities'>
                <div className='title-celebrities'>
                    <p>Previous Rulings</p>
                </div>
                <div className='option-celebrities'>
                    <select>
                        <option value="List">List</option>
                        <option value="Grid">Grid</option>
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