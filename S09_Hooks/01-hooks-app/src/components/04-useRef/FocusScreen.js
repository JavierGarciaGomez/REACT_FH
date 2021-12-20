// 113
import React, { useRef } from 'react'
import '../styles.css'

export const FocusScreen = () => {
    const inputRef = useRef()
    


    const handleClick = () => {
        // document.querySelector('#input113').focus()
        inputRef.current.focus();
    }

    return (
        <div>
            <h3>Focus screen</h3>
            <hr></hr>
            <input 
                ref={inputRef}
                type='text'
                className='form-control'
                placeholder='Su nombre'
                id='input113'
            />
            <button 
                className='btn btn-outline-primary mt-5'
                id='btn113'
                onClick={handleClick}    
            >
                    Botón</button>


            <hr></hr>
        </div>
    )
}
