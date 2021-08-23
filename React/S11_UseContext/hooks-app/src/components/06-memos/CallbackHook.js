// 117
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../styles.css'
import { ShowIncrement } from './ShowIncrement';



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => setCounter(counter+1);

    const increment = useCallback(
        () => {
            setCounter(counter => counter +1)
        },
        [setCounter],
    )

    useEffect(() => {
        
    }, [increment])

    
    
    return (
        <div>
            <h3>118 Callback Hook</h3>
            <h4>Counter {counter}</h4>
            <ShowIncrement increment={increment}/>
   
        </div>
        
    )
}
