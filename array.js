var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ["apple", "banana"];
fruits.push("orange"); // 元の配列を変更してしまう、破壊的操作
console.log(fruits);
var footds = ["menma", "takouyaki"];
var all = fruits.concat(footds);
console.log(fruits); // ['apple', 'banana']
console.log(all); // ['apple', 'banana', 'menma', 'takoyaki']
var alls = __spreadArray(__spreadArray([], fruits, true), footds, true);
console.log(alls);
var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
function userId(_a) {
    var id = _a.id;
    return id;
}
console.log(userId(user));
