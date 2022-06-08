import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
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
                    categories.map( (cat) =>{
                        return (<li key={cat}> {cat} </li>)
                    })
                }
            </ol>
        </>
    )
}