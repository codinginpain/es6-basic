var fs = require(`fs`);

fs.writeFile(`./output.txt`, `Hello.`, function(err) { //writeFileSync도 있음!! 
    if(err) {
        console.log(`에러발생`);
        console.dir(err);
        return; //여기서 return 시켜 버리면 밑으로 안내려가기 때문에 else 할 필요 없음 오..!
    }

    console.log(`output/txt 파일에 데이터 쓰기 완료함.`);
});