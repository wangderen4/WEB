//作业 查找指定字符串中出现最多的字母，并统计出现的个数
//比如：abbabbbsdhjhasdjgshgagdhas
/*function reserveWord(params) {
    //字符串分割成数组
    for(let i = 0;i < params.length;i++) {
        new_array.push(params[i]); 
    }

    //遍历数组 实现相同字符串个数相加 不同字符串追加到新数组中
    new_a.push(new_array[0])//具有不同元素的数组

    new_array.forEach((value)=>{     //forEach() 遍历new_array数组的元素
        for(let i = 0; i < new_array.length;i++) {
            value.count = 0;
            if(value == new_array[i]) {
                value.count += 1;
                new_a_num.push(value.count)
            }else{
                if(value )
                new_a.push(value)
            }
        }
        
    })
    console.log(new_a)
    console.log(new_a_num)
}
var new_array = [];
var new_a = []; 
var new_a_num = [];
reserveWord('asdfghjklpoiuytresdfghjkjbsafhdkafdhsjfbksdajfhbd')
 */


 //去重函数：返回去重后的数组
 function func(params) {
    // console.log(params)
    //string转换成数组
    for (let i = 0 ; i < params.length; i++) {
        empty_array.push(params[i])
    }
    //遍历empty_array 然后进行去重操作
    for(let i = 0 ; i < empty_array.length; i++) {
        //第二次遍历 且从下标1开始 判断empty_array[i] == empty_array[j] 是否成立
        for (let j = i + 1;j < empty_array.length; j++) {
            //如果等式成立，则把empty_array[j]的值从列表中清除
            //(为了在清除过程中避免有漏网之鱼，我们使下标还是从刚刚清除元素的位置,所以用到了j--)
            if(empty_array[i] == empty_array[j]) {
                empty_array.splice(j,1);
                j--;
            }
        }
    }
 }
 
 //统计函数：统计字符串中每个字符的个数  返回一个统计个数的数组
function func1(params) {
    // 调用func() 获取数组empty_array
    func(params);
    // console.log(empty_array);
    for(let i = 0 ; i < empty_array.length ; i++) {
        var count = 0;
        for(let j = 0 ; j < params.length ; j++) {
            if(empty_array[i] == params[j]) {
              count++
            }
        }
        // console.log(count)
        num_array.push(count)
    }
    // console.log(num_array);
    return num_array;
}

function func2(params) {
    func1(params);
    for(let i = 0 ; i < num_array.length - 1; i++) {
        var max = num_array[i] > num_array[i+1]? num_array[i] :num_array[i+1];
    }
    for(var i = 0; i < num_array.length;i++) {
        if(max == num_array[i]) {
            console.log('字母' + empty_array[i] + '出现的频率最高,总共出现了' +max+ '次')
        }
    }
}

  //定义一个空数组用于存放遍历字符串后的元素
  var empty_array = [];

  //声明一个空数组num_array，用于存放统计empty_array中元素的个数
  var num_array = [];



//函数调用
var a ='dsfghjklfghsdfjkutfdshjkgfsadogfffffffbvjscknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnjhsakljjjjjjjjjjjjjjjdggdshfljhlghs'
 func2(a);
