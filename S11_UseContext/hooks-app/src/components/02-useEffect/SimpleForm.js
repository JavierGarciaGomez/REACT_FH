// 107
import React, { useEffect, useState } from 'react'
import './effects.css'
import {Message} from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState
    

    useEffect(() => {
        console.log('log desde el use Effect')
    }, [])

    useEffect(() => {
        console.log('formState cambió')
    }, [formState])

    
    useEffect(() => {
        console.log('email cambió')
    }, [email])

    const handleInputChange = (event) =>{
        const {target} = event;
        setFormState({
            ...formState,
            [target.name]: target.value
        })
        event.preventDefault();
        console.log(event.target)
    }

    return (
        <>
            <h3>107 Simple form</h3>  
            <div className='form-group'>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='tu nombre' 
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type='text' 
                    name='email' 
                    className='form-control' 
                    placeholder='email@email.com' 
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message/>}
            
            
            
            <hr></hr> 
        </>
    )
}
