import { useEffect, useState } from "react";
import { getGifs } from "../utils/fetchGifs";

type Props = { category: string };

type Gif = {
  id: string;
  title: string;
  url: string;
};

export const GifGrid = ({ category }: Props) => {
  const [gifs, setgifs] = useState<Gif[]>([]);
  const [loading, setloading] = useState(false);
  console.log("RENDERIN GIFT GRID", { category, gifs, loading });

  useEffect(() => {
    console.log("UDE EFFECT");
    const fetchGifs = async () => {
      try {
        setloading(true);
        const data = await getGifs(category); // Use the getGifs function
        setgifs(data);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setloading(false);
      }
    };
    fetchGifs();
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {gifs.map((gif) => (
            <div key={gif.id}>
              <img src={gif.url} alt={gif.title} />
              <p>{gif.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
