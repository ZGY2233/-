class  Node{
    constructor(key){
        this.prev = null;
        this.next = null;
        this.key = key;
    }
}

class LinkedList{
    constructor(){
        this.head = new Node('head');
        this.length = 0;
        this.tail = this.head;
    }

    //增
    insert(key,position){
        var newNode = new Node(key);
        var current = this.head;

        if(position < 0 || position > this.length) return false;

        var index = 0;
        while(index++ < position){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        newNode.prev = current;
        this.tail = newNode;
        this.length++;

    }

    //查 
    get(position){
       if(position <= this.length*0.5){
           var current = this.find(position);
       }else{
            var current = this.findReverse(position);
       }
       return current;
    }
    indexOf(key){
        var current = this.head;
    }

    //删除
    remove(key){

    }
    removeAt(position){
        var current = this.get(position);
        var prev = current.prev;
        prev.next = current.next;
        this.length--;
    }

    //返回节点可以自己修改
    update(position){
        var current = this.get(position);
        return current;
    }
    
    //顺查
    find(position){
        var current = this.head;
        var index = 0;

        while(index++ < position){
            current = current.next;
        }
        return current;
    }
    //逆查
    findReverse(position){
        var index = this.length;
        var current = this.tail;

        while(index-- > position){
            current = current.prev
        }
        return current;
    }

    display(){
        var current = this.head;
        var index = -1;
        var list = '';

        while(index++ < this.length){
            list += current.key + ',';
            current = current.next;
        }
        return list;
    }
    displayReverse(){
        var current = this.tail;
        var index = this.length;
        var list = '';

        while(index-- > 0){
            list += current.key + ',';
            current = current.prev;
        }
        return list;
    }
}

var ls = new LinkedList();
ls.insert('a',0);
ls.insert('a1',0);
ls.insert('a2',0);
ls.insert('a3',0);
ls.insert('a4',0);
ls.insert('a5',0);

console.log(ls.displayReverse())