//作业：给一段字符串~让他们倒序输出 eg：i am a good man 转换成 man good a am i


function func(params) {
    //声明一个局部变量(作用域为 func() 函数内)变量i 用来表示截取字符串的起始下标
    let i = 0; 
    //声明一个局部变量index 表示第一次索引空格元素的位置
    let index;
    //遍历字符串中所有的空格 当字符串中没有空格时结束循环
    while (index != -1) {//这里的条件不会触发 所以在下边写相同 条件1 解决函数不能中止的问题
        index = params.indexOf(' ',i)
        //条件1
        if(index == -1) {
            empty_array.unshift(params.substr(i));
            console.log('空格已经完全遍历~ ')
            return
        }
        console.log('条件1执行完毕。。。')
        //把截取到的元素使用 unshift()方法 追加到 数组empty_array 中
        if(params.substr(i,index-i) != '') {
            empty_array.unshift(params.substr(i,index-i));
        }
        console.log('元素  》' + params.substr(i,index-i) +'  已被添加到数组》' + empty_array + '《中。。。' )
        // i += index+1;
        i = index+1;
        console.log('下一次开始索引 空格 的位置是' + i)
        
    }
    
}


function func1() {
    // for(let i = 0 ; i < empty_array.length; i++) {
    //      console.log(i,empty_array[i]);
    // }
    var new_string = '';
    for(let i = 0 ; i < empty_array.length; i++) {
        // console.log('驻足的长度是' + empty_array.length)
        
        if(i > empty_array.length - 1) {
            new_string = new_string+empty_array[i]
        }else{
            new_string = new_string+empty_array[i] +' ';
            
        }
    }
    console.log(new_string);
}


var empty_array = [];
var str = '虽 然 做 的 时 候 有 些 崩 溃 好 歹 最 后 做 出 来 了 就 是 效 率 有 点 低'
func(str)
// console.log(empty_array);
func1()