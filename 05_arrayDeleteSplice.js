var users = [{name:`소녀시대`, age:22}, {name:`걸스데이`, age:23}, {name:`티아라`, age:25}];

delete users[1]; // => [{ name: '소녀시대', age: 22 }, <1 empty item>, { name: '티아라', age: 25 }]

//delete를 사용하면 개수는 유지되고 delte한 자리에 그냥 빈 값이 들어간다

console.dir(users);

users.forEach(function(elem, index){
    console.log(`원소 #${index}`);
    console.dir(elem);
});

console.log(`after splice 3 parameters`);
users.splice(1, 0, {name:`애프터스쿨`, age:27}); //시작 번호, 삭제할 개수, 추가할 객체
console.dir(users);

console.log(`after splice 2 parameters`); //start number, amount of delete element
users.splice(2,0);
console.dir(users);