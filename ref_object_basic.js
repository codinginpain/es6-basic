//자바스크립트에서 객체에 속성을 추가 하는 방법은 두가지이다 객체.속성 으로 넣거나 객체['속성']로 넣을 수 있음

var person = {};

person[`name`] = `소녀시대`;
person[`age`] = 20;

console.log(`name : ${person.name}`);
console.log(`age : ${person[`age`]}`);

