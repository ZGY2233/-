//空栈不能pop top
//pop弹出栈顶元素，top是获得栈顶元素，不弹出
var MyStack = function(){
    this.stack = [];
}

MyStack.prototype.empty = function(){
    return this.stack.length == 0;
}

MyStack.prototype.push = function(val){
    this.stack.push(val);//js数组push向尾部添加元素
}

MyStack.prototype.pop = function(){
    if(!this.empty()) return this.stack.pop();//js数组pop() 方法用于删除并返回数组的最后一个元素。
}

MyStack.prototype.top = function(){
    if(!this.empty()) return this.stack[this.stack.length - 1];
}