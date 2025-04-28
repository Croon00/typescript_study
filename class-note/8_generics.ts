// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이') // 문자열 하이
// logText(true) // 진위값 true


// function logText<T>(text: T): T {
//     console.log(text)
//     return text;
// }

// logText<string>('하이'); // 제네릭으로 생성할 때 명시적으로 타입을 넘길 수 있고 아닐 수도 있다.

// function logText(text: string) {
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// } // 문자열만 받을 수 있게 됨

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
    
//     return text;
// }

// const a = logText('a'); // 문자를 넣었음에도 불구하고 string | number이다.
// a.split('')// 정확한 문자가 아니라서 split 사용 불가

// logText('a');
// logText(10);
// logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// logText('a')
// logText(10)

// 제네릭을 통해서 타입 확정을 통해 이점을 가져갈 수 있다.
const str0 = logText<string>('abc');
str0.split('');
const flag = logText<boolean>(true);

