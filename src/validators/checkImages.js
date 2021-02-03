function checkImagesMainFeaturedPost(posts) {
  let largest;
  let checkImages;

  if (posts.image.length === 0) {
    checkImages = "";
  } else {
    let images = posts.image[0].formats;
    if (!images) {
      checkImages = posts.image[0].url;
    } else {
      const formats = ["thumbnail", "small", "medium", "large"];
      for (let format of formats) {
        // eslint-disable-next-line
        Object.keys(images).map((key) => {
          if (key === format) {
            largest = key;
          }
        });
      }
      checkImages = posts.image[0].formats[largest].url;
    }

    return checkImages;
  }
}

export default checkImagesMainFeaturedPost;
