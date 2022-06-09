import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Barcelona'])
/* 
    const handleAdd = ()=>{
        setCategories([...categories, 'HunterXHunter']);
    } */

    return(
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( cat =>(
                        <GifGrid 
                            key={ cat }
                            category={ cat } 
                        />
                    ))
                }
            </ol>
        </>
    )
}