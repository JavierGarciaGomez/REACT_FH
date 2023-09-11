import dotenv from "dotenv";
dotenv.config();

export const getImagen = async (success: boolean = true) => {
  try {
    if (!success) {
      throw new Error("No sirve paps");
    }
    const apiKey = process.env.GiphyApiKey;
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No se encontro la imagen";
  }
};

getImagen();
