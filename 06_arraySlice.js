// splice와 다르다
//배열 복제

var users = [{name:`소녀시대`, age:22}, {name:`걸스데이`, age:23}, {name:`티아라`, age:25}];

var newUsers = users.slice(1,2); //start index, end index

console.dir(newUsers);