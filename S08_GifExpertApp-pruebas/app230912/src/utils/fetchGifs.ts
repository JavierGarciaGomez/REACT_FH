interface GifData {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export const getGifs = async (category: string) => {
  console.log("getGIFS");
  const apikey = import.meta.env.VITE_GiphyApiKey;
  const limit = 5;
  const query = encodeURIComponent(category); // Encode category for URL
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=${limit}&q=${query}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const gifData = data.data as GifData[];
      const gifs = gifData.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }));
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      return gifs;
    } else {
      console.error(`Failed to fetch data. Status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return [];
  }
};
