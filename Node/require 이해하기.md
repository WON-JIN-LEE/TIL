# Module과 require 이해하기

## 📌 1. Node.js 모듈
ES6에서는 Client-side JavaScript에서도 동작하는 모듈 기능을 추가하였다. 단 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 ES6 모듈을 현재의 브라우저에서 사용하기 위해서는 SystemJS, RequireJS 등의 모듈 로더 또는 Webpack 등의 모듈번들러를 사용하여야 한다. ES6 모듈은 키워드 export, import를 제공한다.

Node.js는 사실상 모듈 시스템의 사실상 표준(de facto standard)인 CommonJS를 채택하였고 현재는 독자적인 진화를 거쳐 CommonJS 사양과 100% 동일하지는 않지만 기본적으로 CommonJS 방식을 따르고 있다.
### Node.js 특징

- Node.js는 module 단위로 각 기능을 분할할 수 있다. 
- module은 파일과 1대1의 대응 관계를 가지며 하나의 모듈은 자신만의 독립적인 실행 영역(Scope)를 가지게 된다. 
- 따라서 클라이언트 사이드 JavaScript와는 달리 전역변수의 중복 문제가 발생하지 않는다.
- 모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다. 그리고 공개된 모듈은 require 함수를 사용하여 임포트한다.
___

## 📌 2. exports
모듈은 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조 가능하다. 만약 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 exports 객체를 사용해야 한다.

모듈을 파일로 작성하고 외부에 공개할 대상을 exports 객체의 프로퍼티 또는 메소드를 정의한다. 그리고 모듈을 전역 함수 require()를 이용하여 추출한다.

require 함수를 사용하여 임의의 이름으로 circle 모듈을 import한다. **모듈의 확장자(ex: require('./circle.js'); == require('./circle')) 는 생략할 수 있다.**
___
## 📌 3. module.exports
exports 객체는 프로퍼티 또는 메소드를 여러 개 정의할 수 있었다. 하지만 module.exports에는 하나의 값(원시 타입, 함수, 객체)을 할당할 수 있다.

exports와 module.exports는 혼동하기 쉽다. exports는 module.exports에의 참조이며 module.exports의 alias이다. 즉, exports는 module.exports와 같다고 보아도 무방하다.

|구분|	모듈 정의 방식|	require 함수의 호출 결과|
|--|--|--|
|exports|	exports 객체에는 값을 할당할 수 없고 공개할 대상을 exports 객체에 프로퍼티 또는 메소드로 추가한다.|	exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달된다.|
|module.exports|	module.exports 객체에 하나의 값(원시 타입, 함수, 객체)만을 할당한다.|	module.exports 객체에 할당한 값이 전달된다.|


## 3.1 module.exports에 함수를 할당하는 방식
```js
// foo.js
module.exports = function(a, b) {
  return a + b;
};
```
```js
// app.js
const add = require('./foo');

const result = add(1, 2);
console.log(result); // => 3
```

module.exports는 1개의 값만을 할당할 수 있다. 모듈에서 1개의 값만을 공개하는 것은 불편할 수 있다. 다음과 같이 객체를 사용하여 복수의 기능을 하나로 묶어 공개하는 방식을 사용할 수 있다.

## 3.2 exports에 객체를 할당하는 방식
객체를 외부에 공개하는 경우 다음과 같이 정의한다.
```js
// foo.js
module.exports = {
  add (v1, v2) { return v1 + v2 },
  minus (v1, v2) { return v1 - v2 }
};
```
```js
// app.js
const calc = require('./foo');

const result1 = calc.add(1, 2);
console.log(result1); // => 3

const result2 = calc.minus(1, 2);
console.log(result2); // => -1
```
___
## 📌 4. require
require 함수의 인수에는 파일뿐만 아니라 디렉터리를 지정할 수도 있다. 예를 들어 다음과 같은 디렉터리 구조의 경우를 살펴보자.

    project/
    ├── app.js
    └── module/
        ├── index.js
        ├── calc.js
        └── print.js

아래과 같이 모듈을 명시하지 않고 require 함수를 호출하면 해당 디렉터리의 index.js을 로드한다.
이때 로드되는 index.js 내에서 calc.js과 print.js를 require하면 한번의 require로 alc.js과 print.js의 모든 기능을 사용할 수 있다.

```js
// module/index.js
module.exports = {
  calc: require('./calc'),
  print: require('./print')
};
```
```js
// app.js
const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();
```

___

## 📌5.코어 모듈과 파일 모듈
Node.js는 기본으로 포함하고 있는 모듈이 있다. 이를 **코어 모듈**이라 한다. 코어 모듈을 로딩할 때에는 패스를 명시하지 않아도 무방하다.
```js
const http = require('http');
```

npm을 통해 설치한 외부 패키지 또한 패스를 명시하지 않아도 무방하다.
```js
const express = require('express');
```

코어 모듈과 외부 패키지 이외는 모두 파일 모듈이다. 파일 모듈을 로딩할 때에는 패스를 명시하여야 한다.