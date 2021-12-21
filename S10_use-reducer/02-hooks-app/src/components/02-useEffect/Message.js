// 108, 109
import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const {x, y} = coords;

    useEffect(() => {
        console.log('108-Componente montado')
        // 109
        const mouseMove =(e)=>{            
            setCoords({x: e.x, y:e.y})           
        } 
        
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('108-Componente desmontado')
        }
    }, 
    // componente a escuchar
    [])

    return (
        <div>
            <h4>coords: {x}, {y}</h4>
            
        </div>
    )
}
