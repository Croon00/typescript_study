// 함수의 인자를 구조 하는 인터페이스
interface User1 {
    age: number;
    name: string;
}

let seho: User1 = {
    name: '세호',
    age: 33,
}

const getUser = (user: User1): void => {
    console.log(user);
}
const captin = {
    name: '캡틴아메리카',
    age: 23
}
getUser(captin);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

let sumFun: SumFunction;

sumFun = function (a: number, b: number): number{
    return a + b;
}

sumFun = (a: number, b:number): number => {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
} // 해당 index 요소의 숫자로 접근했을 때는 모두 string으로 하기

let arr0: StringArray = ['a', 'b', 'c'];
arr0[0] = 'l'; //


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp // vscode에서 자동완성 해주는 정규표현식
}

let obj1: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/, // css확장자로 끝나는 파일들
    jsFile: /\.js$/, // cs확장자로 끝나는 파일들
}

Object.keys(obj1).forEach(function (value) {

})

Object.keys(obj1).forEach(element => {
    
});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{

    language: string;
}

let spiderMan: Developer = {
    language: 'spider',
    name: 'spiderman',
    age: 23
}

