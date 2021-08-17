// 73, 74, 75, 78
import React, {useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  // 75
  // const [images, setImages] = useState([])

  


  // 78
  const {data: images, loading} = useFetchGifs(category);
  

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">'Cargando....'</p>}
      <div className="card-grid">
        
      {/* 85 */}
      <ol>
        {
          images.map((image, index) => 
          <GifGridItem key={image.id} {...image}/>            
          )
        }
      </ol>
      
      
    </div>
    </>
  );
};


GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}