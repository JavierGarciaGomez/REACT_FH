import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../styles.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state: counter, increment} = useCounter();
    const [show, setShow] = useState(true)
    
    
    
    return (
        <div>
            <h3>116 Memorize</h3>
            
            <h4>Counter: <Small value={counter}/></h4>
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>
            <button 
                className='btn btn-primary ml-3'
                onClick={ () => {setShow(!show)}}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
            <hr></hr>    
        </div>
        
    )
}
