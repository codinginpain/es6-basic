function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0; //외부 함수(내부 함수를 생성하고있는)에서 선언된 변수가
    var history = function() {
        count ++; //내부에서도 정상적으로 참조 되는 것 = closure
        return `#${count} ${a} + ${b} = ${result}`;
    }

    return history;
}

var add_history = add(10, 10, function(result) {
    console.log(`더하기 결과 : ${result}`);
});

console.log(`add_history의 자료형  : ${typeof(add_history)}`);

console.log(`결과값으로 받은 함수 실행 : ${add_history()}`);
console.log(`결과값으로 받은 함수 실행 : ${add_history()}`);
console.log(`결과값으로 받은 함수 실행 : ${add_history()}`);

//07_callback.js 에서 실행 순서를 참고 할 것