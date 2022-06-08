import React, { useState } from 'react';

export const GiffExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = ()=>{
        setCategories([...categories, 'HunterXHunter']);
    }

    return(
        <>
            <h2>GiffExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

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