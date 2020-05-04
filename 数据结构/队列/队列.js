//队列------》先入先出

class Queue{
    constructor(){
        this.items = [];
    }

    //进入队列
    enqueue(element){
        return this.items.push(element);//插向尾部
    }

    //
    dequeue(){
        return this.items.shift();//删除第一个元素
    }

    //
    front(){
        return this.item[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    toString(){
        var resultString = '';
        for(var i=0;i<this.items.length;i++){
            resultString += this.items[i] + ','
        }

        return resultString;
    }
}

var q = new Queue;

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.dequeue();

console.log(q.toString())