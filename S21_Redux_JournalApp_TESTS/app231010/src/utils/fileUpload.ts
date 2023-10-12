export const fileUpload = async (file?: File) => {
  if (!file) throw new Error("There's no file selected for uploading");

  const cloudinaryCloudName = "dwalcv9li";
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`;

  const formData = new FormData();
  formData.append("upload_preset", "react-course");
  formData.append("file", file);

  console.log({ formData, file });

  try {
    const imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

    const respi = await fetch(imageUrl);
    const blob = await respi.blob();
    const file2 = new File([blob], "foto.jpg");
    console.log({ respi, blob, file2 });

    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    console.log({ resp: resp });

    if (!resp.ok) throw new Error("It was not posible to update the image");
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.log(error);
    }
  }
};
