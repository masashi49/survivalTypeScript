const numA = (x: number): number => {
    return x * x
}

console.log(numA(100))

const numB = (x: number): boolean => 40 === x

console.log(numB(40))

// 論理積を理解した
console.log(10 > 0 && 20)

// 両方trueならtrue　どっちかいっこでもfalseならfalseだよ
// 左側がtureなら、右側を評価しにいくよ。
// 文字列はtrue扱いだよつまり
console.log("cat" && "dog") //の場合はcatがtrue扱いで、右を評価しにいき、dogもtrueだから、最後に評価したdogがかえるよ

var hoge = {
    name: "ほげです",
    say: function (word: string) {
        return this.name + word;
    }
}

console.log(hoge.say("うんこ"))
var huga = {
    name: "ふが出る"
}
console.log(hoge.say.call(huga, "callだうよ"))
console.log(hoge.say.apply(huga, ["applyだよ"]))



const stringRreduce = (array: string[]): string => {
    return ""
}
const numberRreduce = (ary: number[]): number => {
    return 2
}
type Recuce<T> = {
    (array: T[], inicalValue: T): T
}
const reduce: Recuce<string> = (array) => {
    return ""
}


export default function genericsBasicSample() {
    //ジェネリックなし
    const stringReduce = (array: string[], inicalValue: string): string => {
        let result = inicalValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(stringReduce(["may", "i", "help", "you"], "こんにちわ"))
    const numberReduce = (array: number[], inicalValue: number): number => {
        let result = inicalValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    //console.log(numberReduce([100, 200, 300], 1000))

    type Recuce = {
        (array: string[], inicalValue: string): string
        (array: number[], inicalValue: number): number
    }
    type GenericReduce<T> = {
        (array: T[], inicalValue: T): T
    }
    const genericStringReduce: GenericReduce<string> = (array, inicalValue) => {
        let result = inicalValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(genericStringReduce(["a", "b", "c", "c"], "zzzzzzzz"))
    const genericNumberReduce: GenericReduce<number> = (array, inicalValue) => {
        let result = inicalValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(genericNumberReduce([1,2,3,3,223,23,34,4,3,43,32,34,3,3,23], 1))



    // いろいろなジェネリック型の定義方法
    //完全んな呼出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
    type GenericReduce2 = {
        <T>(array: T[], inicalValue: T): T
        <U>(array: U[], inicalValue: U): U
    }

    type Genericdfds3<T> = (array: T[], inicalValue: T) => T // 完全なシグネチャ
    type Genericdfds4 = <T>(array: T[], inicalValue: T) => T // ここのシグネチャに割り当てる
}
