import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        //Viene el evento onChage y se modifica con el hook 
        setInputValue(e.target.value);

        console.log('Handle input change llamado')
    }
   

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats ])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}//Es el evento que determina un cambio y captura el cambio
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
