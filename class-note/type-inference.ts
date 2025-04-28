let ab; // server가 돌아가면서 타입추론을 하게됨
let abc = 10; // 마우스 호버 했을 때 숫자 타입인것을 확인 가능

// // 기본 값 설정 가능 파라미터에
// function getB(b = 10) {
//     var c = 'hi';

//     return b + c;
// }

// // 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본3 // 이중으로도 값이 들어갈 수 있다.
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

// 타입스크립트의 랭귀지에 의해서 실시간으로 타입이 추론된다.
let detailItem: DetailDropdown<string> = {
    title: '제목',
    description: '설명',
    value: '123',
    tag: '태그'
}

// Best Common Type --> 유니온으로 해서 타입을 추론해서 가져온다.
let arr = [1, 2, true];
