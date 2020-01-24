var users = [{name:`소녀시대`, age:22}, {name:`걸스데이`, age:23}];
console.log(`원소의 개수 : ${users.length}`);

users.unshift({name:`티아라`, age:25}); //배열 추가(앞쪽)
console.log(`원소의 개수 : ${users.length}`);

console.dir(users);

var elem = users.shift(); //배열에서 가장 앞 원소 꺼냄
console.log(`원소의 개수 : ${users.length}`);

console.log(`pop으로 꺼낸 배열 원소 elem`);
console.log(elem)