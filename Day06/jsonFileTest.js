let file = require('fs'); // node.js에 있는 모듈 import(file system)
let user = new Object();
let userJSON;

user.name = "Erik";
user.id = "Skylove8";
user.password = "1111";

userJSON = JSON.stringify(user);


// 파일입출력은 기본적으로 비동기방식
// writeFile(경로, 작성할 내용, 인코딩방식, 콜백함수(에러))
file.writeFile('user.json', userJSON, 'UTF-8', 
    function(e){
        if(e){
            console.log(e);
        }
        else{
            console.log("파일 write 성공");
        }
    });


// readFile(경로, 인코딩, 콜백함수(에러, 내용))
/*
file.readFile('./user.json', 'UTF-8',
    function(e, data){
        let user = JSON.parse(data);
        console.log(user.name);
        console.log('아이디 : %s', user.id);
        console.log(user.pw);
    });
*/