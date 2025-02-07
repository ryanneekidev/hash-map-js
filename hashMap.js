class HashMap{
    constructor(mapSize){
        this.map = [];
        this.mapSize = mapSize;
        this.mapCapacity = mapSize;
        this.mapLoad = 0;
        this.keys = [];
        this.values = []
    }

    calculateHash(key){
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
       
        return hashCode;
    }

    getCapacity(){
        return this.mapCapacity;
    }

    getLoad(){
        return this.mapLoad;
    }

    addNode(key, value){
        if(this.getLoad() < this.getCapacity()){
            let hashCode = this.calculateHash(key);
            let index = hashCode % this.getCapacity();
            this.map[index] = {key: key, value: value};
            this.keys[index] = key;
            this.values[index] = value; 
            this.mapLoad+=1;
            console.log(`Added value [ ${value} ] with key [ ${key} ] and hash [ ${hashCode} ] at index [ ${index} ]`)
        } else {
            console.log('Map is full, doubling capacity');
            this.mapCapacity*=2;
        }
    }

    getNode(key){
        let index = this.calculateHash(key) % this.getCapacity();
        if (this.map[index]) {
            return this.map[index].value;
        } else {
            return undefined;
        }
    }

    hasNode(key){
        let index = this.calculateHash(key) % this.getCapacity();
        if (this.map[index]) {
            return true;
        } else {
            return false;
        }
    }

    removeNode(key){
        if (this.hasNode(key)) {
            let index = this.calculateHash(key) % this.getCapacity();
            this.map[index] = undefined;
            this.keys[index] = undefined;
            this.values[index] = undefined; 
            this.mapLoad-=1;
            return true;
        } else {
            return false;
        }
    }

    mapLength(){
        return this.getLoad();
    }

    clearMap(){
        this.map = [];
        this.keys = [];
        this.values = [];
        this.mapLoad = 0;
    }

    getKeys(){
        return this.keys;
    }

    getValues(){
        return this.values;
    }

    getEntries(){
        let entries = [];
        for (let i=0;i<this.map.length;i++) {
            if (this.map[i]) {
                entries.push([this.map[i].key, this.map[i].value]);
            }
        }
        return entries;
    }
}
