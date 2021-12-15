export default function genericsAdvancedSample() {

    // 型宣言の形を流用したいなぁ。何度も同じようなtypeを宣言したくないなぁ。
    function mapNunber(array: string[], fn: number): number {
        return Number()
    }
    function mapString(array: number[], fn: string): string {
        return String()
    }
    function mapArray(array: number[], fn: string): string[] {
        return [String()]
    }
    function mapBool(array: number[], fn: string): boolean {
        const result = !array
        return result
    }

    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[] // ジェネリクスを使って、型指定を受け取るようにしよ！

    
    const mapStringsToNumbers: Map<string, number> = (array, fn) => { // さっきのジェネリクス type Map 使ってnumberを返そう！
        const reuslt = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            reuslt[i] = fn(item)
        }
        return reuslt
    }

    const numgers = mapStringsToNumbers(["23", "3324", "23"], (item) => Number(item))
    console.log("ジェネリクス文字から数字", numgers)

    const mapNumberToStrings: Map<number, string> = (array, fn) => { // さっきのジェネリクス type Map 使ってstringを返そう！
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
