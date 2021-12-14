export default function genericsAdvancedSample() {
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

    function map(array:string[], fn:number):number { // 宣言が長すぎる。
        return Number()
    }


    const mapStringsToNumbers: Map<string, number> = (array, fn) => {
        const reuslt = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            reuslt[i] = fn(item)
        }
        return reuslt
    }

    const numgers = mapStringsToNumbers(["23", "3324", "23"], (item) => Number(item))
    console.log("ジェネリクス文字から数字", numgers)

    const mapNumberToStrings: Map<number, string> = (array, fn) => {
        const reuslt = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            reuslt[i] = fn(item)
        }
        return reuslt
    }

    const stringssss = mapNumberToStrings([23, 3324, 23], (item) => String(item))
    console.log("ジェネリクス数字から文字", stringssss)
}
