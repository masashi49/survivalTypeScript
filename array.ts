const fruits = ["apple", "banana"]
fruits.push("orange") // 元の配列を変更してしまう、破壊的操作
console.log(fruits)

const footds = ["menma", "takouyaki"]
const all = fruits.concat(footds)
console.log(fruits); // ['apple', 'banana']
console.log(all); // ['apple', 'banana', 'menma', 'takoyaki']

const alls = [...fruits,...footds]
console.log(alls)
