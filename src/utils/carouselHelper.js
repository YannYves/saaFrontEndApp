export default function carouselHelper(data) {
  let carouselData = [];
  // eslint-disable-next-line

  let imageObj = data.images;
  // eslint-disable-next-line
  imageObj.map((images) => {
    let carouselObj = { original: "", thumbnail: "" };
    carouselObj.thumbnail = images.formats.thumbnail.url;
    if (images.formats.large) {
      carouselObj.original = images.formats.large.url;
    } else if (images.formats.medium) {
      carouselObj.original = images.formats.medium.url;
    } else if (images.formats.small) {
      carouselObj.original = images.formats.small.url;
    } else {
      carouselObj.original = images.url;
    }
    carouselData.push(carouselObj);
  });
  return carouselData;
}
