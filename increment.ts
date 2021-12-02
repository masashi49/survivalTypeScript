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
