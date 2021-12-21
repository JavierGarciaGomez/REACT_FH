// 117
import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../styles.css'


export const MemoHook = () => {

    const {state: counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
    return (
        <div>
            <h3>117 useMemo</h3>
            <h4>Counter {counter}</h4>
   
            <p>{memoProcesoPesado}</p> 

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
