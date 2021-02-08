import React from "react";

import { Parallax } from "react-parallax";
import checkImagesMainFeaturedPost from "../../validators/checkImages";

export default function BackgroundImageParallax(image) {
  let backgroundImage;
  if (image.image.length !== 0) {
    backgroundImage = checkImagesMainFeaturedPost(image.image);
  } else {
    backgroundImage = "none";
  }
  const style = {
    borderRadius: "6px",
  };

  return (
    <div>
      <Parallax bgImage={backgroundImage} strength={100} style={style}>
        <div style={{ height: 400 }}></div>
      </Parallax>
    </div>
  );
}
