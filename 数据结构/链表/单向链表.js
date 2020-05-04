//创建节点
//插入节点
//搜索/遍历节点
//删除节点
//合并节点

//初始化节点
class Node{
    constructor(key){
        this.next = null;
        this.key = key;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //创建节点
    // createNode(key){
    //     return new ListNode(key);
    // }

    //链表头部追加数据
    append(key){
        var newNode = new Node(key);
        if(this.head){//头部有东西
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
    }

    //链表尾部添加数据
    appendend(key){
        //创建新节点
        var newNode = new Node(key);

        if(this.length == 0){//如果是空链表
            this.head = newNode;
        }else{
            var current = this.head;
            while(current.next){//找到最后一个节点
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    toString(){
        var current = this.head;
        var listString = '';

        while(current){
            listString += current.key + ',';
            current = current.next;
        }

        return listString;
    }

    //将数据插入任意位置
    insert(position,key){
        //对position进行越界判断
        if(position < 0 || position > this.length) return false;

        var newNode = new Node(key);

        if(position == 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{

            var previous = null;
            var current = this.head;
            var index = 0;
            while(index++ < position){//先判断再增加
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.length++;
    }

    //获取对应位置的元素
    get(position){
        var index = 0;
        var current = this.head;
        if(position >=this.length || position<0) return false;
        while(index++ < position){
            current = current.next;
        }
        return current.key;
    }

    //返回元素所在链表中的索引
    indexOf(key){ 
        var index = -1;
        var current = this.head;
        while(index++ < this.length){
            if(key == current.key) return index;
            current = current.next;
        }
        return -1;
    }

    //返回某一点
    find(key){
        var index = 0;
        var current = this.head;
        while(current.key !== key){
            current = current.next;
            index++;
            if(index >= this.length-1 )return false;
        }
        return current;
    }

    //返回某个位置的元素
    update(positoin){
        var index = 0;
        var current = this.head;
        if(positoin >= this.length || positoin < 0 )return false;
        while(index++ < positoin){
            current = current.next;
        }
        return current;
    }

    //从列表特定位置删除一项
    removeAt(position){
        if(position < 0 || position >this.length) return false;

        var previous = null;
        var current = this.head;
        var index = 0;

        if(position == 0){
            current = current.next;
            this.head = current;
        }else{
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }

    //从列表中移除某一项
    remove(key){
        var current = this.head;
        var previous = null;
        var index = 0;

        if(current.key == key){
            current = current.next;
            this.head = current;
        }else{
            while(index++ < this.length){
                if(current.key == key) break;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }

    //空链表返回ture 否则返回false
    isEmpty(){
        if(this.length !==0 )return false;
        else return true;
    }

    size(){
        return this.length;
    }
}

//测试代码
var list = new LinkedList();
list.appendend('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.insert(5,'55')
list.update(1).key = '44'

console.log(list.toString())

list.removeAt(0);
console.log(list.toString())

list.remove('44');
console.log(list.toString())

