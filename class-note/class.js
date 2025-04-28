// ES2015 (ES6)
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let capt = new Person('캡틴', 100);
// 사실상 클래스도 함수 프로토타입으로 만들어짐

class Person {
    // 클래스 로직
    constructor(name, age) {

        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }

}

let selom = new Person('새롬', 30); // 생성 되었습니다.
consoel.log(selom)

