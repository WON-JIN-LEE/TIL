var g1 = 1;
const c1 = 2;

function gfn(x) {
    var v1 = 3;
    const c2 = 4;
    g1 = 11;

    function fn(y) {
        const c2 = 5;
        console.log(x + v1 + c1 + g1 + c2 + y);

    }
    fn(6)
}

gfn(100);

if (g1 > 10) {
    let g1 = 1000;
}
console.log(g1)