function hashFunc(str,size){
    var hashcode = 0;
    //1.字符串-》数字（HashCode）
    for(var i=0;i<str.length;i++){
        hashcode = 37 * hashcode + str.charCodeAt(i);
    }
    //2.大数-》小数（数组范围内）
    var index  = hashcode % size;
    
    return index;
}


// console.log(hashFunc('apple',7));
// console.log(hashFunc('app',7));
// console.log(hashFunc('abc',7));
// console.log(hashFunc('applojizes',7));
// console.log(hashFunc('apjizes',7));
// console.log(hashFunc('apples',7));

function abc(num){
    for (var i=2;i <= parseInt(Math.sqrt(num));i++){
        if(num % i == 0) return false;
    }
    return true;
}

function def(num){
    for (var i = num;i<10000;i++){
        if(abc(i)) return i;
    }
}
console.log(def(22))