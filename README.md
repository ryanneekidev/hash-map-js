# Hash Map JS
A simple implementation of the hash map data structure in JavaScript

# Getting started
Create an instance of the hash map by using the `HashMap` class.
```js
class myHashMap = new HashMap();
```
# Functions
## calculateHash(key)
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
## getCapacity() 
```js
getCapacity()
```
Returns the currennt maximum capacity of the hash map
## getLoad() 
```js
getCapacity()
```
Returns the currennt load of the hash map. As in the current number of nodes it holds
## addNode(key, value) 
```js
addNode(key, value)
```
Adds a key/value pair node to the hash map with the specified `key` and `value`
## getNode(key) 
```js
getNode(key)
```
Returns the node with the specified `key` in the hash map. If the node has not been found, returns `false` 
## hasNode(key) 
```js
hasNode(key)
```
Checks is the node with the specified `key` exists in the hash map. If it exists, returns `true`. Otherwise, returns `false`
## removeNode(key) 
```js
removeNode(key)
```
Removes the node with the specified `key` from the hash map and returns `true`. If a node with the specified `key` does not exist, returns `false`
## mapLength() 
```js
mapLength()
```
Returns the current length of the hash map. Same as the `getLoad()` function.
## clearMap()
```js
clearMap()
```
Removes all nodes from the hash map
## getKeys()
```js
getKeys()
```
Returns an array containing only the keys of all nodes in the hash map
**Warning: This function has performance issues when working with large maps**
## getValues()
```js
getValues()
```
Returns an array containing only the values of all nodes in the hash map
**Warning: This function has performance issues when working with large maps**
## getEntries()
```js
getEntries()
```
Returns an array containing sub-arrays that have the key and value of each node in the hash map
**Warning: This function has performance issues when working with large maps**
