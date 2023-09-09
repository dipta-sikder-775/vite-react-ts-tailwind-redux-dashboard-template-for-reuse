export async function generateThumbnailFromUrl(
  url: string = "https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
  maxWidth: number = 100,
  maxHeight: number = 100
): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const blob = await response.blob();

  return new Promise<string>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const aspectRatio = img.width / img.height;
      let thumbnailWidth = maxWidth;
      let thumbnailHeight = maxHeight;

      if (aspectRatio > 1) {
        thumbnailHeight = maxWidth / aspectRatio;
      } else {
        thumbnailWidth = maxHeight * aspectRatio;
      }

      canvas.width = thumbnailWidth;
      canvas.height = thumbnailHeight;

      ctx?.drawImage(img, 0, 0, thumbnailWidth, thumbnailHeight);

      const thumbnailDataURL = canvas.toDataURL("image/jpeg");
      resolve(thumbnailDataURL);
    };

    img.src = URL.createObjectURL(blob);
  });
}

// Example usage
// const imageUrl = "https://example.com/image.jpg";
// const maxWidth = 100; // Set your desired thumbnail width
// const maxHeight = 100; // Set your desired thumbnail height

// generateThumbnailFromUrl(imageUrl, maxWidth, maxHeight)
//   .then((thumbnailDataURL) => {
//     console.log("Thumbnail Data URL:", thumbnailDataURL);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
