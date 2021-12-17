// 106
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'



export const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter();



    return (
        <>
         <h3>Counter with Hook: {state}</h3>   
         <hr></hr>
         <button className='btn btn-primary' onClick={()=>increment(10)}>+1</button>
         <button className='btn btn-primary'onClick={reset}>Reset</button>
         <button className='btn btn-primary'onClick={()=>decrement(8)}>-1</button>
        </>
    )
}
