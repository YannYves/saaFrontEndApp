export default function carouselHelper(data) {
  let carouselData = [];
  // eslint-disable-next-line

  const baseUrl = process.env.REACT_APP_BASE_URL;
  let imageObj = data.images;
  // eslint-disable-next-line
  imageObj.map((images) => {
    let carouselObj = { original: "", thumbnail: "" };
    carouselObj.thumbnail = baseUrl + images.formats.thumbnail.url;
    if (images.formats.large) {
      carouselObj.original = baseUrl + images.formats.large.url;
    } else if (images.formats.medium) {
      carouselObj.original = baseUrl + images.formats.medium.url;
    } else if (images.formats.small) {
      carouselObj.original = baseUrl + images.formats.small.url;
    } else {
      carouselObj.original = baseUrl + images.url;
    }
    carouselData.push(carouselObj);
  });
  return carouselData;
}
