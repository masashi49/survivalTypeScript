function increment(num: number): number {
    return num + 1;
}
console.log(increment(99));

// next https://book.yyts.org/reference/values-types-variables/structural-subtyping



// typeは型エイリアス
// stringやnumber、objectなどの型に、名前をつけることができる
type hoge = string | number
const fururu: hoge = "あいういえ"

type yama = string | boolean | number
const hujisan: yama = "富士山"

// オブジェクトを作るときにtypeを宣言すると、その通りにしないとだめ
type Wild = {
    namesss: string;
    no: number;
    genre: string;
    height: number;
    weight: number;
}

const namesss: string = "pikachu";
const no: number = 25;
const genre: string = "mouse pokémon";
const height: number = 0.4;
const weight: number = 6.0;

const pikachu: Wild = {
    namesss,
    no,
    genre,
    height,
    weight
}

let array: number[];
array = [32432]

let numArray: Array<number> // 数字のみの配列
numArray = [1234]

let strArray: Array<string> // strのみのはい列
strArray = ["1234"]

const list1 = [1, 2, 3]
const list2 = [1, 2, 3]

console.log(list1 === list2)

const abc: Array<string> = ["a", "b", "c"]
const character: string = abc[1]
const character2: string = abc[3333]
console.log(character)
console.log(character2) // undefinedだけどエラーにはならない

const abcd: string[] = ["a", "b", "c"];
const charactersss: string | undefined = abc[0];
console.log(charactersss.toUpperCase())


const aasdf: readonly number[] = [1, 2, 3] // readonlyをつけることで、呼び出し専用にできる
// aasdf[0] = 10  値の上書きは不可
console.log(aasdf)

const arrrrry: number[] = [1, 2, 3, 4]
const [あ, い, う, え, お] = arrrrry
console.log(お) // undifinedになる

const twoBytwo: Array<Array<number | undefined>> = [
    [1, 3,],
    [4, 3, 657]
]
console.log(twoBytwo)
const [[onee], [three], はひ] = twoBytwo
console.log(twoBytwo)


const onetofive: number[] = [1, 2, 3, 4, 5]
const [, , , four, five] = onetofive
console.log(four)

const [leve ,...aft]= onetofive // ...は、残余パターンという
console.log(leve,aft)
