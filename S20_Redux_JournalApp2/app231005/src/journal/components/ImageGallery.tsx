import { ImageListItem, ImageList } from "@mui/material";

type Props = {
  imagesUrls: string[];
};
export const ImageGallery = ({ imagesUrls }: Props) => {
  console.log({ imagesUrls });
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {imagesUrls.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
