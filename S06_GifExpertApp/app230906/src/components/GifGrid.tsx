import { GifGridItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

type Props = { category: string };

export const GifGrid = ({ category }: Props) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="card-grid">
          {gifs.map((gif) => (
            <GifGridItem key={gif.id} {...gif} />
          ))}
        </div>
      )}
    </div>
  );
};
