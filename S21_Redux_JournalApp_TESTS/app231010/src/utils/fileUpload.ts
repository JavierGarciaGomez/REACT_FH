export const fileUpload = async (file?: File) => {
  if (!file) throw new Error("There's no file selected for uploading");

  const cloudinaryCloudName = "dwalcv9li";
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`;

  const formData = new FormData();
  formData.append("upload_preset", "react-course");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    console.log({ resp });

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
