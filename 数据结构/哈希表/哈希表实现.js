// 哈希表类-连地址法实现
function HashTable(){
    //属性 ..loadFactor 装载因子《0.25 变大了需要扩容
    this.storage = []; //数组 数组里存放另一个数组头=存放链表 效率差不多 
    this.count = 0//当前哈希表存储元素
    this.limit = 7//哈希表当前总长度 

    //方法
        // 哈希函数
        HashTable.prototype.hashFunc =  function (str,size){
            var hashcode = 0;
        
            for(var i=0;i<str.length;i++){
                hashcode = 37 * hashcode + str.charCodeAt(i);
            }
        
            var index  = hashcode % size;
            
            return index;
        }

        // 插入&修改
        HashTable.prototype.put = function(key,value){
            //1.又key获取index
            var index  = this.hashFunc(key,this.limit);
            
            //2.根据index取出对应bucket
            var bucket = this.storage[index];

            //3.判断bucket是否为null
            if(bucket == null){
                bucket = [];
                this.storage[index] = bucket;
            }

            //4.判断是否修改数据
            for (var i=0;i<bucket.length;i++){
                var tuple = bucket[i];
                if(tuple[0] == key){
                    tuple[1] = value;
                    return
                }
            }

            //5.添加操作
            bucket.push([key,value]);//添加元素 数组.push(内容)
            
            this.count += 1;

            //6.判断是否需要扩容
            if(this.count > 0.75 * this.limit) this.resize(this.limit *2);
        }

        // 获取
        HashTable.prototype.get = function(key){
            var index = this.hashFunc(key,this.limit);

            var bucket = this.storage[index];

            if(bucket == null) return null;

            for(var i=0;i<bucket.length;i++){
                var tuple = bucket[i];
                if(tuple[0] == key) return tuple[1];
            }

            return null;
        }

        // 删除
        HashTable.prototype.remove = function(key){
            var index = this.hashFunc(key,this.limit);

            var bucket = this.storage[index];

            if(bucket == null) return null;

            for(var i = 0;i<bucket.length;i++){
                var tuple = bucket[i];
                if(tuple[0] == key){
                    bucket.splice(i,1)//数组删除元素 splice（起始下标值，删除个数）
                    this.count--;

                    //是否缩小容量
                    if(this.count > 7 && this.count < this.limit * 0.25) {
                        this.resize(Math.floor(this.limit / 2));
                    }

                    return tuple[1];
                }
            }
            
            return null;
        }

    // 其他方法
        //判断哈希表是否为空
        HashTable.prototype.isEmpty = function(){
            return this.count == 0;
        }

        //获取哈希表元素个数
        HashTable.prototype.size = function(){
            return this.count;
        }

        //获取哈希表质数
        HashTable.prototype.prime = function(){
            return this.limit;
        }

        //获取哈希表装在因子
        HashTable.prototype.loadFactor = function(){
            return this.count / this.limit;
        }

    //哈希表扩容/缩容
        //1.创建哈希表
        HashTable.prototype.resize = function(newlimit){
            //1.保存旧数组内容
            var oldStorage = this.storage;

            //2.重置所有属性
            this.storage = [];
            this.count = 0;
            this.limit = this.toPrime(newlimit);

            //3.遍历oldStorage中所有bucket
            for(var i=0;i<oldStorage.length;i++){
                //3.1取对应的bucket
                var bucket = oldStorage[i];

                //3.2判断bucket是否为null
                if(bucket == null) continue;

                //3.3bucket中有数据
                for(var j=0;j<bucket.length;j++){
                    var tuple = bucket[j];
                    this.put(tuple[0],tuple[1]);//将数据插入新的表中
                }
            }
        }

    //判断是否为质数
    HashTable.prototype.isPrime = function (num){
        for (var i=2;i <= parseInt(Math.sqrt(num));i++){
            if(num % i == 0) return false;
        }
        return true;
    }

    //向上寻找质数
    HashTable.prototype.toPrime = function (num){
        while(!this.isPrime(num)){
            num++;
        }
        return num
    }
}

var ht = new HashTable();

ht.put('ac1','xiaoming');
ht.put('ac2','xiaoming');
ht.put('ac3','xiaoming');
ht.put('ac4','xiaoming');
ht.put('ac5','xiaoming');
ht.put('ac6','xiaoming');
ht.put('ac7','xiaoming');
ht.put('ac8','xiaoming');
ht.put('ac9','xiaoming');
ht.put('ac10','xiaoming');
ht.put('ac11','xiaoming');
ht.put('ac12','xiaoming');
ht.put('ac13','xiaoming');
ht.put('ac14','xiaoming');
ht.put('ac15','xiaoming');
ht.put('ac16','xiaoming');
ht.put('ac17','xiaoming');
ht.put('ac18','xiaoming');
ht.put('ac19','xiaoming');
ht.put('ac20','xiaoming');
ht.put('ac21','xiaoming');
ht.put('ac22','xiaoming');

console.log(ht.size());
console.log(ht.prime());
console.log(ht.loadFactor());


ht.remove('ac9','xiaoming');
ht.remove('ac10','xiaoming');
ht.remove('ac11','xiaoming');
ht.remove('ac12','xiaoming');
ht.remove('ac13','xiaoming');
ht.remove('ac14','xiaoming');
ht.remove('ac15','xiaoming');
ht.remove('ac16','xiaoming');
ht.remove('ac17','xiaoming');
ht.remove('ac18','xiaoming');
ht.remove('ac19','xiaoming');
ht.remove('ac20','xiaoming');
ht.remove('ac21','xiaoming');
ht.remove('ac22','xiaoming');
console.log(ht.size());
console.log(ht.prime());
console.log(ht.loadFactor());



console.log(ht.get('ac22'))



