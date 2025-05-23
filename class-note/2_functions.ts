// 함수의 파라미터에 타입을 정의하는 방식
function sum3(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터, 써도 된다, 안써도 된다 --> 물음표
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello ts", "abc");
