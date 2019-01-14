function func(params) {
    let i = 0,index; 
    while (index != -1) {
        index = params.indexOf(' ',i);
        if(index == -1) {
            empty_array.unshift(params.substr(i));
            return empty_array
        }
        if(params.substr(i,index-i) != '') {
            empty_array.unshift(params.substr(i,index-i));
        }
        i = index + 1;
    } 
}
function func1(params) {
    func(params)
    var new_string = '';
    for(let i = 0 ; i < empty_array.length; i++) {
        if(i > empty_array.length - 1) {
            new_string = new_string+empty_array[i]
        }else{new_string = new_string+empty_array[i] +' ';}  
    }
    console.log(new_string);
}
var str = 'wang hao dong is a good man'
var empty_array = [];
func1(str);




