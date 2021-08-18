// 117

import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('ShowIncrement ejecutado')
    return (
        <button
            className='btn btn-primary'
            onClick={()=>{
                increment();
            }}
        >
            Incrementar
        </button>
    )
})
