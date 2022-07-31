user = {name:"Erik", age:30};
// JSON.parse() : json 타입을 js object로 변환
// JSON.parse(user); // 불가
// userJSON = JSON.stringify(user);
//console.log(userJSON); // 불가

userJSON = '{"name":"Erik", "age":"30"}'; // ''가 있어야 한다.(''로 감싼다.), key:value -> "key":"value" (""로 감싸줘야 한다./숫자제외)
user = JSON.parse(userJSON);
console.log(user.name);

// 상품명과 가격을 JSON으로 만든다.
// JSON을 Object 객체로 변환한다.
// 각각의 프로퍼티를 출력한다.
// JSON으로 변환한 뒤 출력한다.
let productJSON = '{"name":"Mouse", "price":18000}';
let product = JSON.parse(productJSON);
console.log(product.name);
console.log(product.price);

productJSON = JSON.stringify(product);
console.log(productJSON);