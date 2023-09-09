import { useUploadFileMutation } from "@store/api/file/fileApi";
import { IFileUploadRes } from "@typedef/interface/file";
import { useState } from "react";
interface IUseUploadImage {
  fieldName: string;
  fileName: string;
  filePath: string;
}

type TUploadImageFn = (imgs: string[]) => Promise<IFileUploadRes>;
type TUploadImageFile = (imgs: File[]) => Promise<IFileUploadRes>;

const useUploadImage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [uploadImage] = useUploadFileMutation();

  const uploadImageFn: TUploadImageFn = async (imgs: string[]) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      imgs.forEach((img, i) => {
        const file = new File([img], `img_${Date.now()}${i}.jpg`, {
          type: "image/jpeg",
        });

        formData.append(`img_${i}`, file as any);
      });

      const res = await uploadImage(formData).unwrap();
      return res;
    } catch (error) {
      console.log(error);
      throw new Error(error as any);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImageFile: TUploadImageFile = async (imgs: File[]) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      imgs.forEach((file, i) => {
        formData.append(`img_${i}`, file as any);
      });
      console.log("formData: ", JSON.stringify(formData));
      const res = await uploadImage(formData).unwrap();

      setIsLoading(false);
      // console.log('upload image res inside hook: ', res);
      return res;
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      throw new Error(error);
    }
  };

  const fileToUrl = (file: File): string | undefined => {
    try {
      const url = URL.createObjectURL(file);
      return url;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  async function urlToFile(
    url: string,
    filename: string,
    mimeType: "image/jpeg" | "image/png" = "image/jpeg"
  ): Promise<File | undefined> {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const blob = await res.blob();
      setIsLoading(false);
      return new File([blob], filename, { type: mimeType });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return { uploadImageFn, fileToUrl, urlToFile, uploadImageFile, isLoading };
};

export default useUploadImage;
