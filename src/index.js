/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sum = 0;

  for (let i=0; i < preferences.length; i++) {
    let firstItem = preferences[i];
    let secondItem = preferences[firstItem - 1];
    let thirdItem = preferences[secondItem - 1];

    if (thirdItem == i + 1 && firstItem != i + 1) {
      sum++
    }
  }
     return sum / 3;
};
