import {useState} from 'react'

export const useCounter = (initialState = 10) => {
    const [counter, setstate] = useState(initialState)

    const increment = () =>{
        setstate(counter+1)
    }

    const decrement = () =>{
        setstate(counter-1)
    }

    const incrementFactor = (factor=1) =>{
        setstate(counter+factor)
    }
    const decrementFactor = (factor=1) =>{
        setstate(counter-factor)
    }

    const reset = () =>{
        setstate(initialState)
    }

    return{
        state: counter, incrementFactor, decrementFactor, increment, decrement, reset
    }
}
