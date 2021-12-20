// 78, 79
import React, {
    useState,
    useEffect
} from "react";
import {
    getGifs
} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })


    // 79
    useEffect(() => {
        getGifs(category).then(imgs => {
    setState({
                data: imgs,
                loading: false
            })
        })
    })




    return state;
}