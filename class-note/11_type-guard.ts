interface Developer{
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 실제 서비스에서도 유니온 타입으로 반환 값이나 파라미터 받는 경우 많음
function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Making'}

}

let tony = introduce();
console.log(tony.name)

// 단언을 하여서 skill 사용 가능
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    let age = (tony as Person).age
    console.log(age)
}

// if에서 as 써도 안에서도 as를 사용해야 가능함



// 타입 가드 정의 --> is를 함수를 통해서 사용해서 구분하기
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; // skill이란게 있을 대 developer다
}

// 위에서 타입가드를 사용해서 아래에서 as 필요 없이 바로 사용 가능
if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;
}