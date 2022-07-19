# [Node.js] Buffer & readFileSync encoding

Buffer란 Node.js 에서 제공하는 Binary 의 데이터를 담을 수 있는 Object 입니다.
바이너리 데이터라는 말 그대로 01001010... 과 같은 데이터가 Buffer 객체에 담긴다.

일반적으로 파일 시스템 readFileSync 메서드를 통해 파일을 읽어오면 바이너리 데이터로 받아오게 됩니다.

그렇기 때문에 Node에서 파일을 읽어올 때 인코딩 타입을 utf8로 설정하거나 Buffer객체로 받아온 후 toString 메서드로 활용해 utf8로 변환해야합니다.

## 1. 문자열을 Buffer로 변환하기

```js
let buff1 = new Buffer('hi') // deprecated
let buff2 = Buffer.from('hi')
let buff3 = Buffer.from('hi', 'utf-8') // 인코딩 생략가능

// buff1, buff2, buff3 모두 동일
console.log(buff1) // <Buffer 68 69>
console.log(buff2) // <Buffer 68 69>
console.log(buff3) // <Buffer 68 69>
```

new Buffer() 와 Buffer.from() 2가지의 방법으로 동일한 Buffer 객체를 생성할 수 있지만, new Buffer보다는 Buffer.from을 사용하는 것을 권장합니다.

- 실제로 버퍼가 메모리에 담고 있는 값은 이진수 이지만 console에는 16진수로 표기된다.
- Buffer 의 Default 인코딩 값은 UTF-8 입니다.

## 2. Buffer를 문자열로 변환하기

- 간단하게 buffer 객체의 toString() 메소드를 이용해서 변환할 수 있습니다.
- Buffer 생성시와 마찬가지로 인코딩 값은 생략할 수 있습니다.
- toString() 의 default 인코딩 값은 역시 마찬가지로 utf-8 입니다.

```js
buff1.toString() // hi
buff1.toString('utf-8') // hi
```


