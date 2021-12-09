// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
    var startTime = Date.now();
    // `timeout`ミリ秒経過するまで無限ループをする
    while (true) {
        var diffTime = Date.now() - startTime;
        if (diffTime >= timeout) {
            return; // 指定時間経過したら関数の実行を終了
        }
    }
}
// console.log("1,処理を開始");
// // blockTime(1000); // 他の処理を1000ミリ秒（1秒間）ブロックする
// // console.log("この行が呼ばれるまで処理が1秒間ブロックされる");
// setTimeout(() => {
//     console.log("3.ブロック開始")
//     blockTime(1000)// 1秒
//     console.log("4.ブロックする処理完了")
// },1000)
// console.log("2.同期処理します")
// `Promise`インスタンスを作成
var promise = new Promise(function (resolve, reject) {
    // 非同期の処理が成功したときはresolve()を呼ぶ
    // 非同期の処理が失敗したときにはreject()を呼ぶ
});
var onFulfilled = function () {
    console.log("resolveされたときに呼ばれる");
};
var onRejected = function () {
    console.log("rejectされたときに呼ばれる");
};
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
promise.then(onFulfilled, onRejected);
// thenでエラーだけキャッチ 
// function errorPromise(message: string) {
//     return new Promise((resolve, reject) => {
//         reject(new Error(message)) // エラーを投げると自動的にcatchで受け取れる
//     })
// }
// // 第一引数にundifinedを渡すとエラーのみ返すthenとなる
// errorPromise("エラーハンドリング").then(() => {
//     console.log("成功")
// }).catch(error => {
//     console.log(error.message)
// });
