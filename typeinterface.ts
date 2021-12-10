// interfaceは宣言を後からaddできる。
interface Bread {
    calories: number
}
interface Bread {
    type: string
}

// 追加した宣言は全て取り込まないとエラーになる。
const fransPan: Bread = {
    calories: 10,
    type: "2200"
}

// typeで↑と同じことをしようとすると,typeの重複となりエラーが出る。
type MaboDofu = {
    calories: number
    type: string
}
// type MaboDofu = { //重複できない
//     gram: string
// }

type Rice = {
    calories: number
    gram: string
}

type Mabodon = MaboDofu & Rice // 2つのタイプを持つ新たなtypeを作るには、&で繋げる必要がある(交差型(union)という)

const manoDon: Mabodon = {
    calories: 200,
    type: "やわらかい",
    gram:"すごい"
}
