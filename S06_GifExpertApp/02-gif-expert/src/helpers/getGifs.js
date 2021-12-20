// 77

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=3&api_key=F9WWU8akMmyFfMy0lf9IkZU5ZbCglLUJ`;

  const response = await fetch(url);
  const { data } = await response.json();
  // iterate for each element and return and object
  const gifsData = data.map((imgData) => {
    return {
      id: imgData.id,
      title: imgData.title,
      url: imgData.images?.downsized_medium.url,
    };
  });
  return gifsData;
};
