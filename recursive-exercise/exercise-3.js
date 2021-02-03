// LATIHAN 3
function kelipatan(n){
    if(n==1){
        return 3;
    } else {
        return 2 * kelipatan(n-1)
    }
}
console.log(kelipatan(2));