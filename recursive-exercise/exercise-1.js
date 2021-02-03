// LATIHAN 1
function f(n){
    if(n<=1){
        console.log(0);
    } else {
        f(n-2);
        console.log(n);
    }
}
f(10)
f(1)
f(6)