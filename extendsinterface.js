var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//interfaceは実装の時にimplementsを使う
var UseId = /** @class */ (function () {
    function UseId(value) {
        this.value = value;
    }
    UseId.prototype.toString = function () {
        return "".concat(this.value);
    };
    return UseId;
}());
var AADASER = /** @class */ (function () {
    function AADASER(id) {
        this.id = id;
    }
    return AADASER;
}());
var DataStoreage = /** @class */ (function () {
    function DataStoreage() {
        this.data = [];
    }
    DataStoreage.prototype.addTtem = function (item) {
        this.data.push(item);
    };
    DataStoreage.prototype.removetem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStoreage.prototype.getitems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStoreage;
}());
var teststorraaa = new DataStoreage();
teststorraaa.addTtem("data1");
teststorraaa.addTtem("data2");
//teststorraaa.removetem("data1")
console.log(teststorraaa.getitems());
