function increment(num) {
    return num + 1;
}
console.log(increment(99));
var fururu = "あいういえ";
var hujisan = "富士山";
var namesss = "pikachu";
var no = 25;
var genre = "mouse pokémon";
var height = 0.4;
var weight = 6.0;
var pikachu = {
    namesss: namesss,
    no: no,
    genre: genre,
    height: height,
    weight: weight
};
var array;
array = [32432];
var numArray; // 数字のみの配列
numArray = [1234];
var strArray; // strのみのはい列
strArray = ["1234"];
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1 === list2);
var abc = ["a", "b", "c"];
var character = abc[1];
var character2 = abc[3333];
console.log(character);
console.log(character2); // undefinedだけどエラーにはならない
var abcd = ["a", "b", "c"];
var charactersss = abc[0];
console.log(charactersss.toUpperCase());
var aasdf = [1, 2, 3]; // readonlyをつけることで、呼び出し専用にできる
// aasdf[0] = 10  値の上書きは不可
console.log(aasdf);
var arrrrry = [1, 2, 3, 4];
var あ = arrrrry[0], い = arrrrry[1], う = arrrrry[2], え = arrrrry[3], お = arrrrry[4];
console.log(お); // undifinedになる
var twoBytwo = [
    [1, 3,],
    [4, 3, 657]
];
console.log(twoBytwo);
var onee = twoBytwo[0][0], three = twoBytwo[1][0], はひ = twoBytwo[2];
console.log(twoBytwo);
var onetofive = [1, 2, 3, 4, 5];
var four = onetofive[3], five = onetofive[4];
console.log(four);
var leve = onetofive[0], aft = onetofive.slice(1);
console.log(leve, aft);
