//二叉搜索树
class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearhTree{
    // 属性
    constructor(){
        this.root = null;
    }

    //插入数据
    insert(key){
        var newNode = new Node(key);

        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

        //内部方法
        insertNode(node, newNode){
            if(newNode.key < node.key){
                //向左查找
                if(node.left == null){
                    node.left = newNode;
                }else{
                    this.insertNode(node.left, newNode);//递归
                }
            }else{
                //向右查找
                if(node.right == null){
                    node.right = newNode;
                }else{
                    this.insertNode(node.right, newNode);
                }
            }
        }

    //树的遍历
        //先序遍历
        preOrderTranversal(handler){
            this.preOrderTranversalNode(this.root, handler);
        }
            //内部方法
            preOrderTranversalNode(node, handler){
                if(node !== null){
                    //处理节点
                    
                    handler(node.key);
                    //左子树
                    this.preOrderTranversalNode(node.left, handler);

                    //右子树
                    this.preOrderTranversalNode(node.right, handler);
                }
            }
        
        //中序遍历
        inOrderTranversal(handler){
            this.inOrderTranversalNode(this.root, handler);
        }
            inOrderTranversalNode(node, handler){
                if(node !== null){
                    //左子树
                    this.inOrderTranversalNode(node.left, handler);

                    //处理节点
                        handler(node.key);

                    //右子树
                    this.inOrderTranversalNode(node.right, handler);
                }
            }

        
        //后序遍历
        reOrderTranversal(handler){
            this.reOrderTranversalNode(this.root, handler);
        }
            reOrderTranversalNode(node, handler){
                if(node !== null){
                    //左子树
                    this.reOrderTranversalNode(node.left, handler);

                    //右子树
                    this.reOrderTranversalNode(node.right, handler);

                    //处理节点
                        handler(node.key);
                }
            }
    
    //最大值最小值
    min(){
        var node = this.root;
        while(node.left !== null){
            node = node.left;
        }
        return node.key;
    }

    max(){
        var node = this.root;
        while(node.right !== null){
            node = node.right;
        }
        return node.key;
    }

    //搜索特定值 while循环版
    search(key){
        var node = this.root;

        while(node !== null){
            //判断node系欸但的值和传入key大小
            if(node.key < key){
                node = node.right;
            }else if(node.key > key){
                node = node.left;
            }else{
                return true;
            }
        }
        return false
    }
    //搜索特定值 递归版
    recursionSearch(key){
        return this.recursionSearchNode(this.root, key);
    }
        recursionSearchNode(node, key){
            if(node == null) return false;

            //判断node系欸但的值和传入key大小
            if(node.key > key) return this.recursionSearchNode(node.left, key);
            else if(node.key < key) return this.recursionSearchNode(node.right, key)
            else if(node.key == key) return true;
        }

    //删除节点
    remove(key){
        //1.定义临时保存的变量
        var current = this.root;
        var parent = this.root;
        var isLeftChild = true;

        //2.开始查找节点
        while(current.key !== key){
            parent = current;
            if(key < current.key){
                isLeftChild = true;
                current = current.left;
            }else{
                isLeftChild = false;
                current = current.right;
            }

            //如果current已经指向null，则没有要删除的节点
            if(current == null) return false;
        }

        //3.删除节点
            //3.1是叶子节点 节点=null 父节点的左/右 = null
            if(current.left == null && current.right == null){
                if(parent == current){
                    //是根节点也是叶节点
                    this.root = null;
                }else if(isLeftChild) parent.left = null;
                else parent.right = null;
            }
            
            //3.2有一个子节点
            else if(current.left == null || current.right == null){
                    //如果是根节点
                if(current == this.root){
                    if(isLeftChild) this.root = current.left;
                    else this.root = current.right;
                }else{
                    //不是根节点
                    if(current.left !== null){
                        current = current.left;
                        if(isLeftChild) parent.left = current;
                        else parent.right = current;
                    }else{
                        current = current.right;
                        if(isLeftChild) parent.left = current;
                        else parent.right = current;
                    }
                }
            }
            
            //3.3有两个子节点
            else{
                // //1.获取后继节点
                // var successor = this.getSuccessor(current);
            
                // //2.判断是否是根节点
                // if(current == this.root){
                //     this.root = successor;
                // }else if(isLeftChild){
                //     parent.left = successor;
                // }else{
                //     parent.right = successor;
                // }

                // //3.将后继节点的左子树 = current.left
                // successor.left = current.left;
            //--------------------------------------------
                //寻找前驱节点
                var precursor = this.getPrecursor(current)
                //2.判断是否是根节点
                if(current == this.root){
                    this.root = precursor;
                }else if(isLeftChild){
                    parent.left = precursor;
                }else{
                    parent.right = precursor;
                }
                //3.将前驱节点的右子树 = current.right
                precursor.right = current.right;
            }
    }
        //找后继
        getSuccessor(delNode){
            //1.临时节点
            var successorParent = delNode;
            var successor = delNode; 
            var current = delNode.right;//从右子树开始找
        
            //2.寻找节点 
            while(current != null){
                successorParent = successor;
                successor = current;
                current = current.left;
            }
        
            //判断寻找到的后继节点是否是delNode的right节点
            if(successor !== delNode.right){
                successorParent.left = successor.right;
                successor.right = delNode.right;
            }
        
            return successor;
        }
        //找前驱
        getPrecursor(delNode){
            //临时存储变量
            var precursor = delNode;
            var precursorParent = delNode;
            var current = delNode.left;//从做子树开始
        
            //找到前驱节点
            while(current !== null){
                precursorParent = precursor;
                precursor = current;
                current = current.right;
            }
        
            //如果前驱节点不是删除节点的左节点
            if(precursor !== delNode.left){
                precursorParent.right = precursor.left;
                precursor.left = delNode.left;
            }
        
            return precursor;
        }
}

var bst = new BinarySearhTree;
bst.insert(11);
bst.insert(7);
bst.insert(5);
bst.insert(9);
bst.insert(3);
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
bst.reOrderTranversal(function(key){
    resultString += key + ',';
})

console.log(resultString);

bst.remove(15)

var resultString = '';
bst.reOrderTranversal(function(key){
    resultString += key + ',';
})

console.log(resultString);