// LATIHAN 4
function fifteen(n){
    if(n<1){
        return 0;
    } else {
        return 1 + fifteen(n-15);
    }
}
console.log(fifteen(46));