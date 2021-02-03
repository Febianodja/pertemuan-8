// LATIHAN 5
let arrayContainer = []; 
function f(times,number){
    if(times < 1){
        return [];
    } else {
        arrayContainer.push(number);
        f(times-1,number);
        return arrayContainer;
    }
}
console.log(f(3,3));
console.log(f(0,10));
console.log(f(-2,12));
console.log(f(10,10));