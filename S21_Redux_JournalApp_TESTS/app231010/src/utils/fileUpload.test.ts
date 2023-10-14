import { Mock, describe, expect, it, vi } from "vitest";
import { fileUpload } from "./fileUpload";

describe("fileUpload", () => {
  it("should throw an error if no file is selected", async () => {
    await expect(fileUpload()).rejects.toThrowError(
      "There's no file selected for uploading"
    );
  });

  it("uploads a file and returns a URL", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            secure_url:
              "https://res.cloudinary.com/dwalcv9li/image/upload/v1697006043/journal/xnyv3jxkha9vblt7n1uf.jpg",
          });
        },
      })
    ) as Mock;
    const file = new File(["This is the file content"], "file.txt");

    const result = await fileUpload(file);

    expect(result).toMatch(
      /^https:\/\/res\.cloudinary\.com\/dwalcv9li\/image\/upload/
    );
  });

  it("should throw an error if cloudinary responds with an error", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as Mock;
    const file = new File(["This is the file content"], "file.txt");

    await expect(fileUpload(file)).rejects.toThrowError(
      "It was not posible to update the image"
    );
  });
});
