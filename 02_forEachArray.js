var users = [{name:`걸스데이`, age:22}, {name:`소녀시대`, age:23}, {name:`티아라`, age:24}];

for(var i=0; i<users.length; i++) {
    console.log(`전통적 c for문 배열 원소 #${i} : ${users[i].name}`);
}


//forEach 가 성능은 더 좋지만 continue, break 등을 사용한 제어는 불가능하다
users.forEach(function(elem, index, array) { //배열의 각 요소, index 값, 배열 전체값
    console.log(`forEach 문 배열 원소 #${index} : ${elem.name}`);
    console.log(array);
})