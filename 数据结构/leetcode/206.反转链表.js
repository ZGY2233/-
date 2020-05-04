function ListNode(val) {
         this.val = val;
         this.next = null;
     }
function List(){
    this.head = null;
    this.length = 0;

    List.prototype.add = function(val){
        var newnode = new ListNode(val);
        if(this.head){
            newnode.next = this.head;
        }
        this.head = newnode;
        this.length++;

    }
    List.prototype.toString = function(){
            var current = this.head;
            var listString = '';
    
            while(current){
                listString += current.val + ',';
                current = current.next;
            }
    
            return listString;
    }
}
//迭代法
var reverseList = function(head){
    if(!head || !head.next) return head; //如果只有一个节点 直接返回
    var prev = null, curr = head;
    while(curr){

        var next = curr.next;

        curr.next = prev;

        prev = curr;
        curr = next;
    }
    head = prev;
    return head
}

//！null = true   ！888 = false

var ls = new List();
ls.add('1');
ls.add('2');
ls.add('3');
ls.add('4');
// var re = new reverseList(ls.head)
console.log(ls.toString())
console.log(reverseList(ls.head))