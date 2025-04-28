enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 --> 이넘 값을 취급 안 하면 숫자로 취급함, ''로 문자열 출력 할 수 있음

enum Answer {
    Yes = 'Y',
    No = 'N'
}

// 들어온 타입을 단순히 문자열 비교가 아니라, 하나의 enum의 값에 두개 중 하나로 찾는 방법
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.')
    }

    if (answer === Answer.No) {
        console.log('오답입니다')
    }
    
}

askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('y');
// askQuestion('예스');