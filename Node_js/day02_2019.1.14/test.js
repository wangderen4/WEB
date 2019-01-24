// 1.反转字符串，也就是倒序
function str_reverse(src) {
    let new_str = '';
    for(let i = src.length-1 ; i >=0 ; i--) {
        new_str +=src[i];
    }
    return new_str;
    // console.log(new_str);
}

// 2. 查找字符串str1中是否有s_str 如果有则返回s_str第一次出现的下标  str1表示倒序后的字符串 s_str 代表通过哪段字符串进行分割
function str_index_of(str1,s_str) {
    for(let i = 0 ; i < str_split.length; i++) {
        if(str1[i] == s_str[0]) {
            for(let j = 0 ; j < s_str.length; j++) {
                if(str1[i + j] != s_str[j]) {
                    break;
                }
            }
        }
    }
    return -1
}

//3. 让字符串str1通过指定字符串s_str分割 并把单个元素倒序输出
function str_split() {
    //s = startindex 表示分隔符开始索引的下标
    let s = 0;
    let new_str;
    for(let j =0; j <src.length;j++ ) {
        i = str_index_of(s_str,s);
        if (i != -1) {
            new_str = src.substr(s,i-s);
        }else{
            new_str =src.substr(s);
        }
        s = i +s_str.length;
        a_array.push(new_str);
    }

    //把每个元素倒序，并把每个元素添加到数组中
    let new_str1 ;
    
    for(let z = 0; z < a_array.length;z++) {
        console.log(a_array);
        // new_str1 = str_reverse(a_array[z]);
        // console.log(new_str1);
        // if(z < a_array.length - 1) {
        //     last_str += new_str1+ ' ';
        // }else{
        //     last_str += new_str1;
        // }
    }
}

var src = 'my name is Haodong Wang';
var s_str = ' ';
let last_str = '';
var a_array= [] ,show_array = [];
function func(src,s_str) {
    str_reverse(src);
    str_index_of(str_reverse(src),s_str);
    str_split();
   
}

func(src,s_str);
 console.log(last_str);