class Person3 {
    private name: string; // private 도 가능
    age: number; // 멤버변수를 정의 해주어야 함
    readonly log: string // 읽기만 가능한 것

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}