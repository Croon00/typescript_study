# TypeScript - Type Basic & Function + Interface 정리

## 기본 타입 선언

- 문자열, 숫자, 불린 타입 선언 예시

```typescript
let userName: string = "Alice";
let userAge: number = 30;
let isAdmin: boolean = true;
```

## 옵셔널 파라미터 (`?`)

- 파라미터가 **있을 수도 없을 수도 있음**을 의미
- 타입 뒤에 `?`를 붙여 표시

```typescript
function greet(name: string, age?: number) {
  if (age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}.`);
  }
}
```

---

## 함수의 스펙(구조) 정의

### 타입으로 함수 구조 정의

```typescript
type GreetFunction = (name: string, age?: number) => void;

const greet: GreetFunction = (name, age) => {
  if (age) {
    console.log(`Hi, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hi, ${name}!`);
  }
};
```

### 인터페이스로 함수 스펙 정의

```typescript
interface Greet {
  (name: string, age?: number): void;
}

const greetUser: Greet = (name, age) => {
  console.log(`Hello, ${name}${age ? `, age ${age}` : ""}`);
};
```

---

## 인덱싱 타입 (Indexing)

- 키가 동적인 경우, 인덱스 시그니처를 사용해 타입을 정의

### 배열 인덱싱

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Apple", "Banana", "Cherry"];
console.log(myArray[1]); // Banana
```

### 객체 인덱싱

```typescript
interface NameDictionary {
  [key: string]: string;
}

const names: NameDictionary = {
  first: "Alice",
  last: "Johnson",
};
console.log(names["first"]); // Alice
```

---

## 딕셔너리 패턴 (Dictionary Pattern)

- 모든 키가 **같은 타입**을 가질 때 딕셔너리 패턴 사용

```typescript
interface UserScores {
  [userName: string]: number;
}

const scores: UserScores = {
  alice: 95,
  bob: 87,
  charlie: 78,
};
```

- 키는 문자열(string), 값은 숫자(number)로 고정

---

## 인터페이스 확장 (Interface Extension)

- 인터페이스를 상속(확장)하여 **구조를 재사용**할 수 있음

```typescript
interface Person {
  name: string;
  age?: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Alice",
  employeeId: 1234,
};
```

---

## Type Aliases (타입 별칭)

```typescript
type UserID = string;
type Point = { x: number; y: number };
```

## 타입 연산자 (Type Operators)

```typescript
type PersonKeys = keyof Person;
const key: PersonKeys = "name";
```

## enum (열거형)

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

const move: Direction = Direction.Up;
```

## Generics (제네릭)

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
```

## 타입 단언 (Type Assertion)

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

## 타입 가드 (Type Guard)

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function example(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

---

## Union과 Intersection

```typescript
type Admin = { name: string; role: string };
type User = { name: string; age: number };

// Union
type PersonUnion = Admin | User;

// Intersection
type PersonIntersection = Admin & User;
```

## 타입 추론 (Type Inference)

```typescript
let message = "hello world"; // string으로 추론됨
```

## 유틸리티 타입 (Utility Types)

```typescript
interface UserInfo {
  name: string;
  age: number;
}

const partialUser: Partial<UserInfo> = { name: "Alice" };
```

## 매핑된 타입 (Mapped Types)

```typescript
type Keys = "option1" | "option2";
type Flags = {
  [K in Keys]: boolean;
};
```

## 드롭다운 제네릭스 (Dropdown Generics)

```typescript
function dropdownSelect<T>(options: T[]): T {
  return options[0];
}

const selected = dropdownSelect<string>(["one", "two"]);
```

---

## tsconfig.json 설정 예시

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## TypeScript 설치 및 사용 명령어

```bash
# TypeScript 설치
npm install -g typescript

# 프로젝트 초기화
npx tsc --init

# 컴파일
npx tsc

# 타입스크립트 실행기 (ts-node)
npm install -g ts-node

# 실행
npx ts-node src/index.ts
```

---

## 요약

- 타입 별칭, 타입 연산자, 유니언/인터섹션, 제네릭, 유틸리티 타입, 매핑된 타입 등 활용
- tsconfig.json을 통해 프로젝트 설정
- 타입스크립트 설치 및 컴파일, 실행 방법 숙지
