var users = [{name:`소녀시대`, age:22}, {name:`걸스데이`, age:23}];
console.log(`원소의 개수 : ${users.length}`);

users.push({name:`티아라`, age:25});
console.log(`원소의 개수 : ${users.length}`);

var elem = users.pop();
console.log(`원소의 개수 : ${users.length}`);

console.log(`pop으로 꺼낸 배열 원소 elem`);
console.log(elem)

