//字典封装
class  Dictionary{
    constructor(){
        this.items = {};
    }

    //设置键值对
    set(key,value){
        return this.items[key] = value;
    }

    //是否含有某键值
    has(key){
        return this.items.hasOwnProperty(key);
    }

    //删除键值对
    remove(key){
        if(!this.has(key)) return false;

        delete this.items[key];
        return true;
    }

    //通过键值获取value
    get(key){
        return this.has(key) ? this.items[key] : undefined;
    }

    //返回字典所有键值
    keys(){
        return Object.keys(this.items);
    }

    //返回字典所有value值
    values(){
        return Object.values(this.items);
    }

    //返回字典大小
    size(){
        return this.keys().length;
    }

    //清空字典
    clear(){
        this.items = {};
    }
}

var dic = new Dictionary;
dic.set('a',1);
dic.set('b',2);
dic.set('c',3);
dic.set('d',4);
dic.set('d',5);
dic.set('d',6);
dic.set('d',7);

console.log(dic.keys())
console.log(dic.values())
console.log(dic.get('a'))
console.log(dic.size())
console.log(dic.has('a'))
console.log(dic.remove('a'))

console.log('------------------------------')

console.log(dic.keys())
console.log(dic.values())
console.log('------------------------------')

console.log(dic.clear())
console.log(dic.keys())


var myVertexes = ['a','b','c','d','e','f','g','h','i'];
console.log(myVertexes + '-----')