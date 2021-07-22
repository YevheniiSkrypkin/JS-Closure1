function getSum(a) {
    function secondFunc (b) {
        a += b
        return a
    }
    return secondFunc;
}

let sum = getSum(3);

console.log(sum(3))
console.log(sum(5))
console.log(sum(8))