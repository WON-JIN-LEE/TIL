# 자바스크립트의 클로저
- 자바스크립트에서 클로저는 함수가 생성되는 시점에 생성된다.
- 함수가 생성될 때 그 함수의 렉시컬 환경을 포섭(closure)하여 실행될 때 이용한다.


``` 
function closureFunc(s) {
    const name = "Closure";
    return function () {
        console.log(`${s} ${name}`);
    };
}

const returnFucn = closureFunc("Hello!");
returnFucn(); // Hello! Closure
```

- closureFunc : 익명 함수를 return 합니다.
- 반환된 함수: makeClosureFunc의 scope에 있는 name과 s변수를 사용하고 있습니다.

returnFucn은 closureFunc의 block 밖에 선언되어있는데도 Reference error가 발생하지 않았습니다. 즉, closureFunc가 실행 종료되어 Context가 CallStack에서 삭제 되었어도, return된 함수는 closureFunc의 lexical environment를 참조할 수 있다

이처럼 Outer Reference의 Execution Context가 제거되어도 자신이 정의된 환경의 정보(Outer Reference)를 갖고있는 함수가 있습니다. 그 함수와 Lexical Environment를 묶어 Closure라고 부릅니다.

___
## Closure의 구현 방식

Execution Context는 함수가 실행되는 환경 정보를 갖고 있는 객체입니다. 함수가 실행 될 때 CallStack에 추가되며 실행이 종료되면 CallStack에서 종료됩니다. 하지만 CallStack에서 제거된다는 것이 메모리에서 삭제됨을 뜻하는 것은 아닙니다.

### Garbage Collection
JS의 메모리는 3가지 생명주기를 갖습니다.

1. 필요하면 할당한다.
2. 사용한다
3. 필요없어지면 해제한다.

저수준 언어에서는 명시적으로 메모리를 할당 해제하지만 JS에선 수동으로 메모리를 관리하는 대신 가비지 컬렉션이 알아서 메모리를 관리해줍니다. 메모리에 할당된 값이 더는 필요하지 않다고 판단될때 메모리를 해제시키는 과정을 가비지 컬렉션이라고 부르며 이 역할을 가비지 컬렉터가 맡고 있습니다.

가비지 컬렉터가 ‘필요없다’라고 판단하는 기준은 더 이상 '객체에 닿을 수 없을 때'를 말합니다. 닿는다는 roots(전역 변수)를 기준으로 참조, 또는 참조의 참조...가 되는 객체들입니다. 이 알고리즘을 mark and sweep이라고 부르는데 가비지 컬렉터는 ‘root에서 닿을 수 있는’ 객체들의 reachable을 true로 표시하고, false인 객체들은 메모리에서 해제시킵니다.


``` 
function closureFunc(s) {
    const name = "Closure";
    return function () {
        console.log(`${s} ${name}`);
    };
}

const returnFucn = closureFunc("Hello!");
returnFucn(); // Hello! Closure
```
- return 값으로 반환되는 Closure 함수도 선언부를 기준으로 Lexical Environment가 정의됩니다.
- closureFunc의 함수 실행이 종료되며 closureFunc의 Execution Context가 CallStack에서 제거됩니다.
- 가비지 컬렉터가 closureFunc의 Lexical Environment를 메모리에서 지워도 될 지 reachable을 확인합니다.
- 전역 변수인 returnFucn가 Closure함수를 참조하고 있고, Closure함수의 Outer Reference가 closureFunc의 Lexical Environment를 참조하고 있기 때문에 closureFunc의 Lexical Environment는 root에서 닿을 수 있는 상태입니다.
- closureFunc의 Lexical Environment는 메모리에서 제거되지 않습니다.

즉, Closure 함수를 전역 객체가 참조하고 있기 때문에 Closure의 Outer Reference도 메모리에서 삭제되지 않고 계속 유지되는 것이죠.