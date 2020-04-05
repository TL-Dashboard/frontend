export const starLogic = (star, stars, setStars) => {
  if (star === 0) {
    if (stars[0]) {
      setStars([(stars[0] = true), (stars[1] = false), (stars[2] = false)]);
    } else {
      setStars([(stars[0] = true), (stars[1] = false), (stars[2] = false)]);
    }
  } else if (star === 1) {
    if (stars[1]) {
      setStars([(stars[0] = true), (stars[1] = false), (stars[2] = false)]);
    } else {
      setStars([(stars[0] = true), (stars[1] = true), (stars[2] = false)]);
    }
  } else if (star === 2) {
    if (stars[2]) {
      setStars([(stars[0] = true), (stars[1] = true), (stars[2] = false)]);
    } else {
      setStars([(stars[0] = true), (stars[1] = true), (stars[2] = true)]);
    }
  }
  return stars;
};
