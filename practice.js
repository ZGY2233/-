class HashTable{
    constructor(){
        this.storage = [];
        this.count = 0;
        this.limit = 7;
    }

    hashFunc(str,size){
        var hashcode = 0;

        for(var i=0;i<str.length;i++){
            hashcode = 37 * hashcode + str.charCodeAt(i);
        }

        var index = hashcode % size;

        return index;
    }

    put(key, value){
        var index = this.hashFunc(key,this.limit);

        var bucket = this.storage[index];

        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }

        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                tuple[1] = value;
                return;
            }
        }

        bucket.push([key,value]);

        this.count += 1;

        if(this.count > 0.75 * this.limit) this.resize(this.limit * 2);
    }

    get(key){
        var index = this.hashFunc(key,this.limit);

        var bucket = this.storage[index];

        if(bucket == null) return null;

        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key) return tuple[1];
        }

        return null;
    }

    remove(key){
        var index = this.hashFunc(key, this.limit);

        var bucket = this.storage[index];

        if(bucket == null) return null;

        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];

            if(tuple[0] == 'key') {
                bucket.splice(i,1);
                this.count--;

                if(this.count > 7 && this.count < 0.25 * this.limit){
                    this.resize(Math.floor(this.count / 2));
                }

                return tuple[1];
            }
        }

        return null;
    }

    isEmpty(){
        return this.count == 0;
    }

    size(){
        return this.count;
    }

    prime(){
        return this.limit;
    }

    loadFactor(){
        return this.count / this.limit;
    }

    resize(newlimit){
        var oldStorage = this.storage;

        this.storage = [];
        this.count = 0;
        this.limit = this.toPrime(newlimit);

        for(var i=0;i<oldStorage.length;i++){
            var bucket = oldStorage[i];

            if(bucket == null) continue;

            for(var j=0;j<bucket.length;j++){
                var tuple = bucket[j];
                this.put(tuple[0],tuple[1]);
            }
        }
    }
        isPrimre(num){
            for(var i=2;i<parseInt(Math.sqrt(num));i++){
                if(num % i == 0) return false;
            }
            return true;
        }

        toPrime(num){
            while(!this.isPrimre(num)){
                num++;
            }
            return num;
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
console.log(ht.get('ac1'))


// ht.remove('ac9','xiaoming');
// ht.remove('ac10','xiaoming');
// ht.remove('ac11','xiaoming');
// ht.remove('ac12','xiaoming');
// ht.remove('ac13','xiaoming');
// ht.remove('ac14','xiaoming');
// ht.remove('ac15','xiaoming');
// ht.remove('ac16','xiaoming');
// ht.remove('ac17','xiaoming');
// ht.remove('ac18','xiaoming');
// ht.remove('ac19','xiaoming');
// ht.remove('ac20','xiaoming');
// ht.remove('ac21','xiaoming');
// ht.remove('ac22','xiaoming');
// console.log(ht.size());
// console.log(ht.prime());
// console.log(ht.loadFactor());



// console.log(ht.get('ac22'))