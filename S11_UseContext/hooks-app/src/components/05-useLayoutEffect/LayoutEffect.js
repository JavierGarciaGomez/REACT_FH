// 115
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../styles.css'

export const LayoutEffect = () => {
    const {state, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    
    // const {quote, author} = data[0]
    // lo anterior es igual a lo siguiente
    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSixe, setBoxSixe] = useState({});

    useLayoutEffect(() => {
        setBoxSixe(pTag.current.getBoundingClientRect());
    }, [])



    return (
        <div>
            <h3> 115. Layout Effect Breaking Bad Quotes</h3>
                       
                <blockquote className="blockquote text-right">
                    <p className='mb-0'  ref={pTag}> {quote} </p>
                </blockquote>
            
            <pre>
                {JSON.stringify(boxSixe, null, 3)}
            </pre>

            

            <button className='btn btn-secondary' onClick={increment}>Next quote</button>
            <hr></hr>
        </div>
    )
}
