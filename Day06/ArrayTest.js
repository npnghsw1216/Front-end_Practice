// js의 Array객체는 길이름 설정하지 않아도 된다.
// 원하는 인덱스에 원하는 값을 추가할 수 있다.
// 타입도 지정되어 있지 않아 다양한 타입 추가 가능

var datas = [];
datas[0] = 20;
console.log(datas);
datas[3] = 20;
console.log(datas);

var datas2 = [20, 5, 6, 12, 10];
// push() : 가장 마지막에 값 추가
datas2.push(19); 
console.log(datas2);

// join() : 각 요소(element)를 구분값으로 구분하여 리턴
console.log(datas2.join(":"));

// slice(begin, end) : begin인덱스부터 end인덱스 전까지
// slice(begin) : begin인덱스부터 끝까지
console.log(datas2.slice(1,3));
console.log(datas2.slice(1)); 

// forEach(콜백함수(변수){실행할 문장;}) : 각각에 대해서 수행한다.
datas2.forEach(
    function(value){
        console.log(value);
    });

// forEach(콜백함수(변수, 인덱스, Array객체))
datas2.forEach(
    function(value, index, array){
        array[index] = value * value;
    }
);

console.log(datas2);

// indexOf(값) : 값을 Array에서 찾아서 인덱스 번호 리턴(처음등장한 인덱스 번호만 리턴)
// indexOf(값, start, end) : 값을 start index부터 end index까지 찾는다.
console.log(datas2.indexOf(100));
datas2.push(100);
console.log(datas2.indexOf(100, 5));
console.log(datas2.indexOf("abc"));
console.log(datas2.indexOf("12155"));

// Array()로 객체를 선언할 때 용량을 정수로 설정하면 
// 미리 그 만킁을 할당한다.
let datas3 = new Array(7);
datas3.push("월");
console.log(datas3);

let data4 = new Array(7);
let index = 0;
data4[index++] = "월";
data4[index++] = "화";
data4[index++] = "수";
data4[index++] = "목";
data4[index++] = "금";
data4[index++] = "토";
data4[index++] = "일";
console.log(data4);
console.log(data4.toString());

// new Array(초기값)
let week = new Array("월", "화", "수");
week.forEach(
    function(v){
        console.log(v + "요일");
    });