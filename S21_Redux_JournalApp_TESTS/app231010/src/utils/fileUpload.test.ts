import { describe, expect, it } from "vitest";
import { fileUpload } from "./fileUpload";

describe("fileUpload", () => {
  it("should throw an error if no file is selected", async () => {
    await expect(fileUpload()).rejects.toThrowError(
      "There's no file selected for uploading"
    );
  });

  it.only("should upload a file to Cloudinary successfully", async () => {
    // Create a mock file.

    const imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
    const resp = await fetch(imageUrl);
    const buffer = await resp.arrayBuffer();

    // Log the size of the buffer to see if it contains data.
    console.log("Buffer size:", buffer.byteLength);

    const file = new File([buffer], "foto.jpg");
    console.log("Created File:", file);

    const result = await fileUpload(file);
    console.log("Upload Result:", result);
  });

  // // Upload the file.
  // const url = await fileUpload(file);

  // // Assert that the file was uploaded successfully.
  // expect(url).toBe("https://example.com/hello.txt");
  // });
});
