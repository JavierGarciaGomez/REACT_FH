// ..., 114 

import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    // 114
    const isMounted = useRef(true);

    const [state, setstate] = useState({data: null, loading: true, error: null});

    // 114, para que cuando esté cargado se cambié el mounted
    useEffect(() => {
        return () => {
            isMounted.current=false;
        }
    }, [])


    useEffect(() => {

        setstate({data: null, loading: true})

        fetch(url).then(resp => resp.json())
        .then(data => {            
            // hacer la acción solo cuando esté montado
            if(isMounted.current){
                setstate({
                    loading: false,
                    error: null,
                    data
                })
            } 
            
        })
    }, [url])

    return state;
        
}