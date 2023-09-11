import { Gif } from "../types/types";

type Props = Gif;

export const GifGridItem = ({ title, url }: Props) => (
  <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);
