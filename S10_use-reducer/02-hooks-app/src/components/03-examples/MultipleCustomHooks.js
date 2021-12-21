import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './styles.css'

export const MultipleCustomHooks = () => {
    const {state, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    
    // const {quote, author} = data[0]
    // lo anterior es igual a lo siguiente
    const {author, quote} = !!data && data[0];
    
    

    return (
        <div>
            <h3> Breaking Bad Quotes</h3>
            
            {
                loading?
                (
                    <div className='alert alert-info text-center'>Loading</div>
                ):
                (
                    <blockquote className="blockquote text-right">
                        <p className='mb-0'> {quote}</p>
                    </blockquote>
                )
            }
            <footer className='blockquote-footer'> {author} </footer>

            <button className='btn btn-secondary' onClick={increment}>Next quote</button>
            <hr></hr>
        </div>
    )
}
