import imageCompressor from "browser-image-compression";

export default async function compressImage(file) {
  let options = {
    maxSizeMB: 0.3,
    maxWidthOrHeight: 300,
    useWebWorker: true,
  };

  try {
    const compressedfile = await imageCompressor(file, options);
    return compressedfile;
  } catch (error) {
    console.log(error);
  }
}
