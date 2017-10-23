export default () => {
  const gameImages = document.querySelectorAll('.game__content img');
  gameImages.forEach(function(item) {
    const image = new Image();
    image.src = item.src;
    image.onload = function() {
      const currentHeight = item.height;
      item.height = item.naturalHeight * item.width / item.naturalWidth;
      if(item.height > currentHeight){
        item.height = currentHeight;
        item.width = item.naturalWidth * item.height / item.naturalHeight;
      }
    };
  });
};

