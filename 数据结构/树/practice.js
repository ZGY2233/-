class Node{
    constructor(key){
        this.left = null;
        this.right = null;
        this.key = key;
    }
}

class BinarySearhTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        var newNode = new Node(key);

        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node,newNode){
        //向左
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            //向右
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }

//树遍历
    //先序遍历
    preOrderTranversal(handler){
        this.preOrderTranversalNode(this.root, handler);
    }

        preOrderTranversalNode(node, handler){
            if(node !== null){
                handler(node.key);

                this.preOrderTranversalNode(node.left, handler);

                this.preOrderTranversalNode(node.right, handler);
            }
        }

    inOrderTranversal(handler1){
        this.inOrderTranversalNode(this.root, handler);
    }
        
}    




var bst = new BinarySearhTree;
bst.insert(11);
bst.insert(7);
bst.insert(5);
bst.insert(9);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(13);
bst.insert(20);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(25);


//测试遍历
var resultString = '';
bst.preOrderTranversal(function(key){
    resultString += key + ',';
})

console.log(resultString);

