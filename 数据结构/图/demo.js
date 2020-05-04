//图----->邻接表实现
class Graph{
    constructor(){
        //属性:顶点（数组） 边（字典）
        this.vertexs = [];
        this.edgs = new Dictionary;
    }

    //方法
    //添加方法
        //1.添加顶点
        addVertex(v){
            this.vertexs.push(v);
            this.edgs.set(v,[]);
        }
        //2.添加边(无向图)
        addEdge(v1, v2){
            //v1-->v2
            this.edgs.get(v1).push(v2);
            //v2-->v1
            this.edgs.get(v2).push(v1);
        }

    //toString
    toString(){
        var resultString = '';

        for(var i=0;i< this.vertexs.length;i++){
            resultString += this.vertexs[i] +'->'+this.edgs.get(this.vertexs[i]) + '\n';
        }
        return resultString;
    }

    //广度优先算法
        //初始化状态颜色
        initializeColor()
        {
            var colors = [];
            for(var i=0;i<this.vertexs.length;i++){
                colors[this.vertexs[i]] = 'white';
            }

            return colors;
        }

        //实现广度优先搜索
        bfs(initV, handler){
            //1.初始化颜色
            var colors = this.initializeColor();

            //2.创建队列
            var queue = new Queue;

            //3.将顶点加入到队列中
            queue.enqueue(initV);

            //4.循环从队列中取出元素
            while(!queue.isEmpty()){
                //4.1从队列中取出一个顶点
                var v = queue.dequeue();

                //4.2获取和顶点相连的另外顶点
                var vList = this.edgs.get(v)

                //4.3将v的颜色设置为灰色
                colors[v] = 'gray';

                //4.4遍历所有相邻顶点加入到队列中
                for(var i=0;i<vList.length;i++){
                    var e = vList[i];
                    if(colors[e] == 'white'){
                        colors[e] = 'gray';
                        queue.enqueue(e);
                    }
                }

                //4.5处理顶点
                handler(v)

                //4.6将顶点设置为黑色
                colors[v] = 'black';
            }
        }
    
    //深度优先搜索
    dfs(initV, handler){
        //1.初始化颜色
        var colors = this.initializeColor();

        //2.从某个顶点开始依次递归访问
        this.desVisit(initV, colors, handler);
    }
        desVisit(v, colors, handler){
            //1.将颜色设置为灰色
            colors[v] = 'gray';

            //2.处理v顶点
            handler(v)

            //3.访问v相连的顶点
            var vList = this.edgs.get(v);
            for(var i=0; i<vList.length; i++){
                var e = vList[i];
                if(colors[e] == 'white'){
                    this.desVisit(e,colors,handler);
                }
            }

            //4.将v设置成黑色
            colors[v] = 'black';
        }
}

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
//队列封装
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
//测试
var g = new Graph;

var myVertexes = ['a','b','c','d','e','f','g','h','i'];
for(var i=0;i<myVertexes.length;i++){
    g.addVertex(myVertexes[i]);
}
g.addEdge('a','b')
g.addEdge('a','c')
g.addEdge('a','d')
g.addEdge('c','d')
g.addEdge('c','g')
g.addEdge('d','g')
g.addEdge('d','h')
g.addEdge('b','e')
g.addEdge('b','f')
g.addEdge('e','i')

//测试bfs
var resultString = '';
g.bfs(g.vertexs[0],function(v){
    resultString += v + ','
})

//测试机哦dfs
var resultString = '';
g.dfs(g.vertexs[0],function(v){
    resultString += v + ','
})

console.log(resultString)