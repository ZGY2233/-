
function HashTable(){
    this.storage = [];
    this.count = 0;
    this.limit = 7;

    //哈希函数
    HashTable.prototype.hashFunc = function(str,size){
        var hashcode = 0;

        for(var i=0;i<str.length;i++){
            hashcode = hashcode * 37 + str.charCodeAt(i); 
        }
    
        var index = hashcode % size;
        return index;
    }

    //插入修改
    HashTable.prototype.put = function(key,value){
        var index = this.hashFunc(key,this.limit);

        var bucket = this.storage[index];

        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }

        //遍历bucket 寻找key
        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                tuple[1] = value;
                return
            }
        }

        bucket.push([key,value]);
        this.count++;

        //是否扩容
        if(this.count > 0.75 * this.limit) this.resize(2 * this.limit)
        return 
    }

    //获取数据
    HashTable.prototype.get = function(key){
        var index = this.hashFunc(key,this.limit);

        var bucket = this.storage[index];

        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }
        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];

            if(tuple[0] == key) return tuple[1];
        }

        return null;
    }

    //删除
    HashTable.prototype.remove = function(key){
        var index = this.hashFunc(key,this.limit);

        var bucket = this.storage[index];

        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }

        for(var i = 0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                bucket.splice(i,1);
                this.count--;

                //是否压缩
                if(this.count > 7 && this.count < 0.25*this.limit) this.resize(Math.floor(this.limit / 2))
                return tuple[1];
            }
        }

        return null
    }

    //哈希表扩容
    HashTable.prototype.resize = function(newlimit){
        //1保存旧数组内容
        var oldStorage = this.storage;
        
        //2重置所有属性
        this.limit = this.toPrime(newlimit)
        this.count = 0;
        this.storage = [];

        //3遍历oldStorage中所有bucket
        for(var i=0;i<oldStorage.length;i++){
            //3/1获取对应bucket
            var bucket = oldStorage[i];

            //3.2判断bucket是否为null
            if(bucket == null) continue;

            //3.3bucket中有数据
            for(var j=0;j<bucket.length;j++){
                var tuple = bucket[j]

                this.put(tuple[0],tuple[1])//将数据插入新表
            }
        }
    }
    //其他
        HashTable.prototype.size = function(){
            return this.count;
        }
        HashTable.prototype.prime = function(){
            return this.limit;
        }
        HashTable.prototype.isPrime = function(num){
            for(var i=2;i<=parseInt(Math.sqrt(num));i++){
                if(num % i == 0) return false;
            }
            return true;
        }
        HashTable.prototype.toPrime = function(num){
            while(!this.isPrime(num)){
                num++;
            }
            return num;
        }
}
for(var i=0;i<'abc'.length;i++){
    console.log('abc'[i])
    console.log('abc'.charCodeAt(i))
}
