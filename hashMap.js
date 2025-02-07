class HashMap{
    constructor(mapSize){
        this.map = [];
        this.mapSize = mapSize;
        this.mapCapacity = mapSize;
        this.mapLoad = 0;
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
            let index = hashCode % 16;
            this.map[index] = {key: key, value: value};
            this.mapLoad+=1;
            console.log(`Added value [ ${value} ] with key [ ${key} ] and hash [ ${hashCode} ] at index [ ${index} ]`)
        } else {
            console.log('Map is full, doubling capacity');
            this.mapCapacity*=2;
        }
    }

    getNode(key){
        let index = this.calculateHash(key) % 16;
        if (this.map[index]) {
            return this.map[index].value;
        } else {
            return undefined;
        }
    }

    hasNode(key){
        let index = this.calculateHash(key) % 16;
        if (this.map[index]) {
            return true;
        } else {
            return false;
        }
    }

    removeNode(key){
        if (this.hasNode(key)) {
            let index = this.calculateHash(key) % 16;
            this.map[index] = undefined;
            this.mapLoad-=1;
            return true;
        } else {
            return false;
        }
    }

    mapLength(){
        let length = 0;
        for (let i=0;i<this.map.length;i++) {
            if (this.map[i]) {
                length++;
            }
        }
        return length;
    }

    clearMap(){
        for (let i=0;i<this.map.length;i++) {
            if (this.map[i]) {
                this.map[i] = undefined;
            }
        }
    }

    getKeys(){
        let keys = [];
        for (let i=0;i<this.map.length;i++) {
            if (this.map[i]) {
                keys.push(this.map[i].key);
            }
        }
        return keys;
    }

    getValues(){
        let values = [];
        for (let i=0;i<this.map.length;i++) {
            if (this.map[i]) {
                values.push(this.map[i].value);
            }
        }
        return values;
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
