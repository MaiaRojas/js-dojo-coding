function alwaysHungry(arr) {
  if(arr.includes("comida")) {
    console.log('delicioso');
  } else {
    console.log('Tengo hambre');
  }
}

// alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
// alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


function highPass(arr, cutoff) {
  return arr.filter(elem => elem > cutoff);
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // esperamos de vuelta [6, 8, 10, 9]


function betterThanAverage(arr) {
  const sum = ((arr.reduce((acc, curr) => acc + curr)) / arr.length).toFixed(2);
  return arr.filter(elem => elem > sum).length;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
  return arr.reverse();
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
  // [0, 1] son los valores  iniciales del arreglo para calcular el resto.
  var fibArr = [0, 1];
  for (let i = 2; i<= n; i++) {
      fibArr[i] = fibArr[i -1] + fibArr[i - 2];
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta [0,1,1,2,3,5,8,13,21,2=34]
