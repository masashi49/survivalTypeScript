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
console.log(hoge.say.apply(huga, ["っっっs"]));
