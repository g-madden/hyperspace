export const animateStars = (stars: any) => {
  // loop through each star
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    // and move it forward dependent on the mouseY position.
    star.position.z += i / 10;
    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000;
  }
};
