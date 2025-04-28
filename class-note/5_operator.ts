// function logmessage1(value: any) {
//     console.log(value);

// }

// logmessage1('hello');
// logmessage1(100);

// 특정 타입을 2가지 중에 골라서 만들 수 있는것 --> 유니온 타입
let seho3: string | number | boolean;
function logmessage1(value: string | number) {
    console.log(value);

    // any라고 되어 있을때는 자동완성이 안됨, 타입 가드
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logmessage1('hello');
logmessage1(100)


interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}

// 두 개의 전부의 property를 접근할 수 있는 줄알았는데, 공통된 property만 가능하다.
function askSome(someone: Developer2 | Person2) {
    // someone.name
    // someone.age
    // someone.skill
}

// 이런식으로 쓰인다.
askSome({ name: '디벨로퍼', skill: '웹 개발' })
askSome({ name: '캡틴', age: 100})

// 두 개의 전부의 property를 가져가다 사용할 수 있다 --> 인터섹션
function askSome2(someone: Developer2 & Person2) {
    someone.name
    someone.age
    someone.skill
}
askSome2({ name: "디벨로퍼", skill: "웹 개발", age:200 }); // 인터섹션이기 때문에 모든 property를 넘겨주어야 함
// askSome2({ name: "캡틴", age: 100 });

let seho4: string | number | boolean;
let capt2: string & number & boolean;