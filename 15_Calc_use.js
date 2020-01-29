var Calc = require(`./14_Calc_module`);

var calc1 = new Calc();
calc1.emit(`stop`);
console.log(calc1.add(7,3));

console.log(`calc에 stop 이벤트 전달 완료`);

console.log(calc1.add(2,3));