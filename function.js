"use strict";
exports.__esModule = true;
var numA = function (x) {
    return x * x;
};
console.log(numA(100));
var numB = function (x) { return 40 === x; };
console.log(numB(40));
// 論理積を理解した
console.log(10 > 0 && 20);
// 両方trueならtrue　どっちかいっこでもfalseならfalseだよ
// 左側がtureなら、右側を評価しにいくよ。
// 文字列はtrue扱いだよつまり
console.log("cat" && "dog"); //の場合はcatがtrue扱いで、右を評価しにいき、dogもtrueだから、最後に評価したdogがかえるよ
var hoge = {
    name: "ほげです",
    say: function (word) {
        return this.name + word;
    }
};
console.log(hoge.say("うんこ"));
var huga = {
    name: "ふが出る"
};
console.log(hoge.say.call(huga, "callだうよ"));
console.log(hoge.say.apply(huga, ["applyだよ"]));
var stringRreduce = function (array) {
    return "";
};
var numberRreduce = function (ary) {
    return 2;
};
var reduce = function (array) {
    return "";
};
function genericsBasicSample() {
    //ジェネリックなし
    var stringReduce = function (array, inicalValue) {
        var result = inicalValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log(stringReduce(["may", "i", "help", "you"], "こんにちわ"));
    var numberReduce = function (array, inicalValue) {
        var result = inicalValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    var genericStringReduce = function (array, inicalValue) {
        var result = inicalValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log(genericStringReduce(["a", "b", "c", "c"], "zzzzzzzz"));
    var genericNumberReduce = function (array, inicalValue) {
        var result = inicalValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log(genericNumberReduce([1, 2, 3, 3, 223, 23, 34, 4, 3, 43, 32, 34, 3, 3, 23], 1));
}
exports["default"] = genericsBasicSample;
