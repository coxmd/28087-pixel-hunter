export const resize = (frame, given) => {
  const image = {
    width: given.width,
    height: given.height,
  };
  if (image.height > frame.height) {
    image.height = frame.height;
    image.width = image.height * given.width / given.height;
  }
  if (image.width > frame.width) {
    image.width = frame.width;
    image.height = image.width * given.height / given.width;
  }
  return image;
};

export default (screen) => {
  const gameImages = screen.querySelectorAll(`.game__option`);
  gameImages.forEach(function (item) {
    const frameSizes = {
      width: item.clientWidth,
      height: item.clientHeight,
    };
    const imageElement = item.querySelector(`img`);
    const image = new Image();
    image.src = imageElement.src;
    image.onload = function () {
      const imageSize = {
        width: image.width,
        height: image.height,
      };
      const imageNewSize = resize(frameSizes, imageSize);
      imageElement.width = imageNewSize.width;
      imageElement.height = imageNewSize.height;
    };
  });
};

