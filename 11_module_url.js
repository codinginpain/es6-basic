var url = require(`url`);

var urlStr = `https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=popcorn`;

//pathName 은 실제 경로까지만 출력하고
//path는 실제 경로 + 뒤에 던지는 쿼리(파라미터)까지 출력(pathName부터 주소끝까지);

var curUrl = url.parse(urlStr);
console.log(`curUrl dir`);
console.dir(curUrl);

console.log(`query - > ${curUrl.query}`); //curUrl이라는 객체의 query 속성 출력

var curStr = url.format(curUrl);

console.log(`urlFormat - > ${curStr}`);

console.log(`----------------------------------`);
var querystring = require(`querystring`);
var params = querystring.parse(curUrl.query);
console.log(params);
console.log(`검색어 : ${params.query}`);