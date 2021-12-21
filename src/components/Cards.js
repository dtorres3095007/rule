import React from 'react'

export default function Cards({ }){
return ['Card','Computer','Table','Shoes','Card','Computer','Table','Shoes','Card','Computer','Table','Shoes'].map((element)=>{
    return(
        <div className='container'>
            <div className={`cols-15 cols-xm-90 cols-sm-45 cols-md-30 cols-lg-20 cols-xl-20`}>
                <h1>{element}</h1>
            </div>
        </div>
    );
})
}