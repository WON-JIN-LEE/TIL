# Observer Pattern이란?
디자인 패턴이라는 건 소프트웨어 개발을 하면서 발생하는 다양한 이슈들을 해결하는데 도움을 주는 기술들입니다. 많은 개발자들의 경험들을 바탕으로 만들어진 증명된 기술들이죠. 개발에 난항을 겪는 사람들에게는 참조할 수 있는 솔루션이 됩니다. 

오늘은 Observer 패턴을 살펴보도록 하겠습니다.


## Observer Pattern 정의
옵저버 패턴은 감시자들이 한곳을 계속해서 바라보고있고, 이벤트가 발생했을때 이벤트를 바라보고 있는 감시자들이 바로 반응할 수 있는 패턴입니다.

만약 이러한 옵저버 패턴을 가지지 않는다면 이 이벤트를 체크해야 하는 오브젝트들은 1시간, 1분, 1초마다 계속해서 확인해야해서 필요없는 리소스가 발생하기도 하고, 1시간만다 체크하게될 경우 1시간 내에 이벤트가 생겼다 사라지면 이벤트가 발생되었는지 알수도 없게됩니다. 이러한 문제들에 옵저버 패턴을 적용해서 해결할 수 있습니다.

그리고 상태를 가지고 있는 주체 객체와 상태의 변경을 알아야 하는 관찰 객체(Observer Object)가 존재하며 이들의 관계는 1:1이 될 수도 있고 1:N이 될 수가 있다. 서로의 정보를 넘기고 받는 과정에서 정보의 단위가 클 수록, 객체들의 규모다 클 수록, 각 객체들의 관계가 복잡할 수록 점점 구현하기 어려워지고 복잡성이 매우 증가할 것이다.  이러한 기능을 할 수 있도록 가이드라인을 제시해 주는 것이 바로 옵저버 패턴이다.


## Observer Pattern 작동 방식
옵저버 패턴의 작동 방식은 간단합니다. 모듈들에게 옵저버를 등록하여 상태 변화가 있을 때마다 메서드를 통해 옵저버에게 통지하도록 하는 시스템입니다. 모듈들은 상태 변화가 일어났을 대 관찰자(observer)에게 필요한 데이터와 함께 자신의 상태 변화를 통보합니다.

### 요약/ 예시 코드
- 관찰 대상의 "주제 객체" => Subject 클래스의 인스턴스
- 관찰을 하는 "구독객체" => Observer 클래스의 인스턴스
- 구독 객체는 자유롭게 주제 객체를 등록/등록취소 => Subject 클래스의 subscribe와 unsubscribe 메서드
- 한 주제 객체의 상태가 바뀌면 다른 구독 객체들에게 상태와 변경을 알림  => Subject 클래스의 notifyAll 메서드

Observer Pattern 예시 코드
```js
class Subject {
  constructor() {
    this.observers = [];
  }

  getObserversList() {
    return this.observers;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update();
      } catch (error) {
        console.error('error', error);
      }
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subj) {
    console.log(`${this.name} : notfied from ${subj} class!`);
  }
}
const subject = new Subject();

const a = new Observer('A');
const b = new Observer('B');
const c = new Observer('C');

// subscribe
subject.subscribe(a);
subject.subscribe(b);
subject.subscribe(c);


const subjectSubscribe = subject.getObserversList();

console.log(subjectSubscribe);

// notify
subject.notifyAll();
```
