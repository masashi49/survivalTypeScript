"use strict";
exports.__esModule = true;
function genericsAdvancedSample() {
    var mapStringsToNumbers = function (array, fn) {
        var reuslt = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            reuslt[i] = fn(item);
        }
        return reuslt;
    };
    var numgers = mapStringsToNumbers(["23", "3324", "23"], function (item) { return Number(item); });
    console.log("ジェネリクス文字から数字", numgers);
    var mapNumberToStrings = function (array, fn) {
        var reuslt = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            reuslt[i] = fn(item);
        }
        return reuslt;
    };
    var stringssss = mapNumberToStrings([23, 3324, 23], function (item) { return String(item); });
    console.log("ジェネリクス数字から文字", stringssss);
}
exports["default"] = genericsAdvancedSample;
