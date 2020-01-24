function add(a,b, callbackFn) {
    var result = a + b;
    console.log(1);
    callbackFn(result);
    console.log(2);
}

console.log(5);
add(10, 10, function(result) {
    console.log(3);
    console.log(`the result in callback : ${result}`);
    console.log(4);
});

//실행순서 5 1 3 result in callback 4 2