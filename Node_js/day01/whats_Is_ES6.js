/*
ES6
ECMAScript 是JavaScript语言的一代标准
他是在2015年6月正式发布
现在已经到了ES9 (ES6~ES9)  (ES5、ES6、ES7)
ECMAScript 和 JavaScript 是什么关系
    ECMAScript 是 JavaScript 的语言标准和规范
    JavaScript 是 ECMAScript 的实现
*/
// 1.变量和字符串
var a_value = 'hello';//全局变量
if (true) {
    var b_value = 'world';
}
console.log(a_value);
console.log(b_value);
/*为了解决 JS 的变量提升的问题，也要觉得 全局和局部的概念
ES6 引入了新的变量声明方式：
               1.let 局部变量
                     let 声明的变量不能被重复声明
               2.const 局部常量 声明常量
                     const 一旦声明，值不会变，不能再次声明

let 局部变量
对于编程语言来说，{}代表作用与

*/



if (true) {
    var c_value = 123;
    let d_value = 456;
}
// console.log(d_value)

// console.log(e_value)
let e_value = 789;
console.log(e_value)

//笔试题
function func() {
    var aaa = 18;
    var bbb = 20;
    if(true) {
        let aaa = 100;
        var bbb = 200; 
    }
    console.log(aaa);
    console.log(bbb);
}
// func()

/*
2.string
ES5 string
*/
    let a_string = 'hello world';
    //indexOf 返回第一次出现指定字符串的位置下标，如果没找到则返回-1
    let index = a_string.indexOf('world');
    console.log(index);
    index = a_string.indexOf('world',7);
    console.log(index);


    //作业 查找指定字符串中出现最多的字母，并统计出现的个数
    //比如：abbabbbsdhjhasdjgshgagdhas
    //
    let rets = a_string.split(' ')
    console.log(typeof a_string,a_string);
    console.log(typeof rets,rets);


//ES6 中对String方法进行扩展
    //startsWith() 用来返回布尔值表示参数字符串是否在原字符串在指定位置的开始位置默认是从头开始
    console.log(a_string.startsWith('hello'))
    console.log(a_string.startsWith('world',6))
        //endsWith()
        //includes()
    console.log(a_string.includes('or'))
        //repeat() 指定字符串重复几次
    var b_string = 'aabbbbbccccccnnnnn'
    console.log(b_string.repeat(3))
        //模板字符串
    let firstName = "Tom";
    let lastName = 'Ads';

    let totleName = `hello ${firstName} ${lastName}`;
    let tt = `sum: ${1>2?true:false}`; 
    console.log(totleName)

    let lines_string = `
    1
    2
    3
    4
    5
    6
    `

// 3 数组
// 扩展运算符
    console.log(...[1,2,3,4]);
    let a_array = {...[1,2,3,4]}
    console.log(typeof a_array);


    // 功能 实现讲一个数组添加到另外一个数组
    function my_push(array,items) {
        array.push(...items);
    }
    let b_array = [1,2,3,4];
    my_push(b_array,[4,5,6,7,8]);
    console.log(b_array);

    //...表示将args数组展开
    function add(a,b,c,d) {
        return a+b+c+d;
    }
    let args = [1,2,3,4];
    console.log(add(...args));

//forEach
    let c_array = [1,2,3,4,5,6,7];
    c_array.forEach(function (value,index) {
        console.log(index,value)
    })

    // for (const key in object) {
    //     if (object.hasOwnProperty(key)) {
    //         const element = object[key];
            
    //     }
    // }

//
    for (let item in c_array) {
        console.log(item,c_array[item]);
    }

let obj = new Object();
obj.name = 'Tom';
obj.age = 18;

for(const key in obj) {
    console.log(key);
    if(obj.hasOwnProperty('sex')) {
        console.log(true);
    }else{
        console.log(false);
    }
}


//ES6 对数组扩展了3个方法
//keys()  遍历键名

for(let index of ['a','b'].keys()){
    console.log(index)
}

//values() 遍历键值
for(let index of ['a','b'].values()){
    console.log(index)
}

//entries() 遍历键值对
// for(let index of ['a','b'].entries()){
//     console.log(index)
// }

for(let [index,value] of ['a','b'].entries()){
    console.log(index,value)
}

// 函数
//ES6 改进了函数的表达
// ES5 的函数表达
function name(params) {
    //函数体
}

//ES6的箭头函数
var a_func = ()=>{
    //ES6的函数体
}

//(()=>())()

c_array.forEach((value,index)=>{
    console.log(index,value)
})