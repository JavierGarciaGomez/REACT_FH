// 73
import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=F9WWU8akMmyFfMy0lf9IkZU5ZbCglLUJ&q=Rick+and+Morty&limit=8";

    const response = await fetch(url);
    const { data } = await response.json();
    const gifsData = data.map((imgData) => {
      return {
        id: imgData.id,
        title: imgData.title,
        url: imgData.images?.downsized_medium.url,
      };
    });
    console.log(gifsData);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
