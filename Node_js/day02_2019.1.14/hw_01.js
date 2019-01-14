/*
题目： 讲一段英文语句，进行逆序输出
eg: i am a code 最终输出的是 code a am i
要求：不能使用一些内置的方法 例如split() indexOf() search()
*/
// 1.1 实现逆序方法
function my_reverse(src) {
    // 此条件表示传进来的有参数
    if(!src) {
        return;
    }
    // 定义一个空字符串
    let temp = '';
    for (let i = src.length; i >=0; i--) {
        temp +=src[i];
    }
    return temp;
}


// 2.4 实现原生indexOf() 的功能
function index_of(src,subsrc) {
    if (!src || !subsrc) {
        return
    }
    for (let i = 0 ; i < src.length ; i++) {
        if (src[i] == subsrc[0]) {
            let j = i;
            for (let k = 0; k < subsrc.length; k++) {
                if (src[j] != substr[k]) {
                    break;
                }else{
                    j++;
                }
            }
        }
    }
    return -1
}
// 2.3 进行分割
function my_split(src,substr) {
    // 定义一个存放分割出来字符串的数组容器
    let temp = [];
    // 首先要明确字符串的长度
    let src_len = src.length;
    let substr_len = substr.length;
    for (let i = 0 ; i < src_len ; i++) {
        // 要找出现指定字符或者字符串的以第一个位置
        // 要在这里自己实现一个indefOf()方法
        let index = index_of(src,substr)
    }
}

// 2.1 次序
function word_reverse(src) {
    //2.2 对字符串进行分割
    let substr = ' ';
    my_split(src,substr);
}

function show(src) {
    // 1.逆序
    let rever_str = my_reverse(string)
    // 2.次序

    // 3.输出
}


let src = 'i am  a word'
show(src)