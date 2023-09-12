import { useEffect, useState } from "react";
import { Gif } from "../types/types";
import { getGifs } from "../utils/fetchGifs";

export const useFetchGifs = (category: string) => {
  const [gifs, setgifs] = useState<Gif[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
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

  return { gifs, loading };
};
