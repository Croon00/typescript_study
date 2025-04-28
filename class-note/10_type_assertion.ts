// 타입 단언(type assertion)
let a;
let b = 10;
a = 20;
a = 'a'
let c = a as string;
// 타입스크립트 보다 사용하는 내가 더 잘 알고있을 때 사용


// DOM API 조작할때 사용 많이
// <div id="app">hi</div>

let div = document.querySelector('div');
// div가 있는지 확인 하고 사용해야함
if (div) {
    div.innerText
}