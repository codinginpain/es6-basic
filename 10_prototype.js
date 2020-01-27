//기존 방식의 객체 생성
var person1 = {name:`소녀시대`, age:`20`};
var person1 = {name:`걸스데이`, age:`21`};
//----------------------------------------

//함수로의 객체 생성
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//두가지 방식 모두 생성 되는 객체에는 별 차이 없음
//-----------------------------------


//아래와 같이 prototype 정의가 가능해진다
Person.prototype.walk = function(speed) {
    console.log(`${speed} + km 속도로 걸어 갑니다.`);
}

var person3 = new Person(`소녀시대`, 20);
var person4 = new Person(`걸스데이`, 22);

person3.walk(10);