var hello = "hello";
console.log(hello);
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(str2);
var global_num = 1; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 2; // 类变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 4; // 局部变量
    };
    Numbers.s_num = 3; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.s_num); // 静态变量
var obj = new Numbers();
console.log("类变量: " + obj.num_val);