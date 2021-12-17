// 114

import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import '../styles.css'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    return (
        <div>
            <h3>RealExampleRef</h3>
            {show && <MultipleCustomHooks/>}
            <button
                className='btn btn-secondary'
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Toggle show</button>
        </div>
    )
}
