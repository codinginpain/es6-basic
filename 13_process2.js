process.on(`tick`, function(count) {
    console.log(`tick 이벤트 발생 count 값 : ${count}`);
});

setTimeout(function() {
    console.log(`2초후 실행`);
    process.emit(`tick`, 2);
}, 2000)