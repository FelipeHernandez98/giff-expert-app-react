import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState("Hola mundo");

    const handleInputChange = (e)=>{
        //Viene el evento onChage y se modifica con el hook 
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}//Es el evento que determina un cambio y captura el cambio
            />
        </form>
    )
}
