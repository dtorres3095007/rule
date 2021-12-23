import React from 'react'
import List from '../components/List'
import Card from '../components/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { celebrities,useWindowDimensions  } from '../assets/js/General';
import { useSelector, useDispatch } from 'react-redux';
import { changeTypeList } from "../redux/actions/actGlobal";
 
export default function Celebrities(){
    const typeList = useSelector(state => state.redGlobal.typeList);
    const dispatch = useDispatch()
    const { width } = useWindowDimensions();

    if( width <= 767){
        return <CelebritiesCardApp />
    }else{
        if(typeList == 'List'){
            return <CelebritiesList typeList='List' changeTypeList={(item)=> dispatch(changeTypeList(item))}/>;
        }else{
            return <CelebritiesCard typeList='Card' changeTypeList={(item)=> dispatch(changeTypeList(item))}/>;
    
        }
    }
}

const Description = ({changeTypeList, typeList})=>{
    return (
        <div>
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
        </div>
    )
}

 function CelebritiesList({changeTypeList, typeList}){
    return (
        <div className='container-celebrities'>
            <Description typeList={typeList} changeTypeList={changeTypeList}/>
            <br/>
            <br/>
            <br/>
            {
                celebrities().map(({name, description, category, picture, lastUpdated, votes, id })=>{
                    return(
                        <List 
                            picture={picture} 
                            name={name} 
                            category={category}
                            lastUpdated={lastUpdated}
                            description={description}
                            votes={votes}
                            id={id}
                        />

                    )
                })
            }
        </div>
    );
}

function CelebritiesCardApp({}){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 767, min: 582 },
          items: 1.5
        },
        desktop: {
          breakpoint: { max: 582, min: 400 },
          items: 1.5
        },
        tablet: {
          breakpoint: { max: 542, min: 434 },
          items: 1.2
        },
        mobile: {
          breakpoint: { max: 434, min: 0 },
          items: 1.1
        }
      };

    return(
        <div className='container-celebrities'>
            <Description typeList={''} changeTypeList={()=>{}}/>
            <Carousel
                responsive={responsive}
                containerClass="carousel-container"
                arrows={false}
                >
                {
                    celebrities().map(({name, description, category,picture_card, lastUpdated, votes, id })=>{
                        return(
                            <Card 
                            picture={picture_card} 
                            name={name} 
                            category={category}
                            lastUpdated={lastUpdated}
                            description={description}
                            votes={votes}
                            id={id}
                            />)
                        })
                    }

            </Carousel>
        </div>
    )
}
function CelebritiesCard({changeTypeList, typeList}){
    return (
        <div className='container-celebrities-card'>
            <Description typeList={typeList} changeTypeList={changeTypeList}/>
            <br/>
            <br/>
            <br/>
            <div className='container-celebrities-card-info'>
                <div className='container-celebrities-elements'>
                {
                    celebrities().map(({name, description, category,picture_card, lastUpdated, votes, id })=>{
                        return(
                            <Card 
                                picture={picture_card} 
                                name={name} 
                                category={category}
                                lastUpdated={lastUpdated}
                                description={description}
                                votes={votes}
                                id={id}
                            />

                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}