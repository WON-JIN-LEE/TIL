function deepCopy(object) {
    if (object === null || typeof object !== "object") {
        return object;
    }

    // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};

    for (let key of Object.keys(object)) {
        copy[key] = deepCopy(object[key]);
    }
    
    return copy;
}

const object = {
    a: "a",
    number: { one: 1, two: 2, },
    arr: [1, 2, [3, 4]],
};

const copy = deepCopy(object); //재귀 함수 이용

copy.number.one = 3;
copy.arr[2].push(5);

console.log(object === copy);// false
console.log(object.number.one === copy.number.one);// false
console.log(object.arr === copy.arr);// false

console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }

