// LATIHAN 5
function f(times,number){
    let arrayContainer = []; 
    if(times < 1){
        return arrayContainer;
    } else {
        arrayContainer = f(times-1,number);
        arrayContainer.push(number);
        return arrayContainer;
    }
}
console.log(f(3,3));
console.log(f(0,10));
console.log(f(-2,12));
console.log(f(10,10));