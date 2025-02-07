# Hash Map JS
A simple implementation of the hash map data structure in JavaScript

# Getting started
Create an instance of the hash map by using the `HashMap` class.
```js
class myHashMap = new HashMap();
```
# Functions
```js
calculateHash(key)
```
Returns a hash of the given `key` using this hash function
```js
let hashCode = 0;
const primeNumber = 31;

for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
}

return hashCode;
```
