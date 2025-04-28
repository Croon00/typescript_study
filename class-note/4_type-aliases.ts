interface Person1{
    name: string,
    age: number;
}

// type Person1 = {
//     name: string;
//     age: number;
// }

var setho2: Person1 = {
    name: '세호',
    age: 30
}

type MyString = string;
var str1: MyString = 'hello';
// 타입으로 별칭 해놓으면 해당 타입을 가져다 쓸 때 커서를 가져다 대면 타입의 형태를 확인할 수 있다.

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}

