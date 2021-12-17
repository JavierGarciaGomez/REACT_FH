// 279, 280
import cloudinary from "cloudinary";

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dwalcv9li",
  api_key: "814223959776335",
  api_secret: "Eizhcy279_-CwTgCEO8q5ypj7Lw",
});

describe("Pruebas en fileUpload", () => {
  test("debe de cargar un archivo y retornar el URL", async (done) => {
    const resp = await fetch(
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    );

    // blob is the btyes of the file
    const blob = await resp.blob();

    const file = new File([blob], "foto.png");

    // the file upload returns a url
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    // Borrar imagen por ID
    const segments = url.split("/");

    const imageId = segments[segments.length - 1].replace(".png", "");

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test("debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
