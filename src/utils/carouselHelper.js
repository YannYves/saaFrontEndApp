export default function carouselHelper(data) {
  let carouselData = [];
  let baseUrl = "http://localhost:1337";
  // eslint-disable-next-line
  let imageObj = data.images;
  // eslint-disable-next-line
  imageObj.map((images) => {
    let carouselObj = { original: "", thumbnail: "" };
    carouselObj.thumbnail = baseUrl + images.formats.thumbnail.url;
    if (images.formats.large) {
      carouselObj.original = baseUrl + images.formats.large.url;
    } else if (images.formats.medium) {
      carouselObj.original = baseUrl + images.formats.medium.url;
    } else {
      carouselObj.original = baseUrl + images.formats.small.url;
    }
    carouselData.push(carouselObj);
  });
  return carouselData;
}
