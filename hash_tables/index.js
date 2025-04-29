class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hashKey = this._hash(key)
    if(!this.data[hashKey]) {
        this.data[hashKey] = []
    }
    this.data[hashKey].push([key, value])
    return this.data
  }

  get(key) {
    const hashKey = this._hash(key);
    const currentBucket = this.data[hashKey]
    if(currentBucket) {
     for(const data of currentBucket) {
        if(data[0] === key) {
            return data[1]
        }
     }
    }
    return undefined
  }
}


const myHashTable = new HashTable(10);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"))