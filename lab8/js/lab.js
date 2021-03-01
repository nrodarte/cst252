//Author Nick R //
// PUBLIC DOMAIN//
//2/28/21

function isEven(x){
    return (x % 2 == 0);
}

//test Function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 83, 6, 12, 14, 144, 11]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, false]//
console.log("Testing evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return [10, 9.1104335791443, 2.449489742783178, 3.4641016151377544, 3.7416573867739413, 12, 3.3166247903554]//

console.log("Squareroot of array:", result);
