
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  let finalArr = [];
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }
  matrix.forEach(element => {
    if (Array.isArray(element)) {
      check(element);
    }

  });


  function check(arr) {
    arr.forEach(el => {
      finalArr.push(el);
    });
  }


  return finalArr;
}
