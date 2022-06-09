import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const  [images , setImages]  = useState([])
    // Solo se dispara cuando el componente es renderizado por 1era vez
    useEffect(()=>{
        getGifs(category)
            .then( setImages )
        
    }, [])
    //

    

    return (
        <div className=''>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
