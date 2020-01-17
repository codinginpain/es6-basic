var path = require(`path`);

var directories = [`Users`, `kee`, `docs`];
var dirStr = directories.join(); // ","
console.log(dirStr); //User,kee,docs

var dirStr2 = directories.join(path.sep); //  "\"
console.log(`dirStr2 : ${dirStr2}`); // Users\kee\docs

var filepath = path.join(`/Users/kee`, `notepad.exe`); //path라는 모듈의 join을 사용하여 파일 경로를 생성 join("파일 경로", "파일 이름")
console.log(`filepath : ${filepath}`);

var dirname = path.dirname(filepath); // path.dirname = 파일명을 제외한 파일 path
console.log(`dirname : ${dirname}`); //  \User\kee
var basename = path.basename(filepath);  //파일 이름
console.log(`basename : ${basename}`);   //  notepad.exe
var extname = path.extname(filepath); // 확장자
console.log(`extname : ${extname}`); //  .exe
