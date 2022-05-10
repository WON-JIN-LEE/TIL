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


// unsubscribe
subject.unsubscribe(b);

const subjectUnsubscribe = subject.getObserversList();

console.log(subjectUnsubscribe);


// notify
subject.notifyAll();