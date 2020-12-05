export default function carouselHelper(data) {
  let carouselData = [];
  let baseUrl = "http://localhost:1337";
  // eslint-disable-next-line
  data.map((e) => {
    let imageArray = e.images;
    for (let i = 0; i < imageArray.length; i++) {
      // create an object to map the data
      let carouselObj = { original: "", thumbnail: "" };
      carouselObj.thumbnail = baseUrl + e.images[i].formats.thumbnail.url;
      // check the size available
      if (e.images[i].formats.large) {
        carouselObj.original = baseUrl + e.images[i].formats.large.url;
      } else if (e.images[i].formats.medium) {
        carouselObj.original = baseUrl + e.images[i].formats.medium.url;
      } else {
        carouselObj.original = baseUrl + e.images[i].formats.small.url;
      }
      // push objects into the original array
      carouselData.push(carouselObj);
    }
  });

  return carouselData;
}
