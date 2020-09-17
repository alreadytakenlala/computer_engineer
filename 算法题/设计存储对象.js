class LRUCache {
	constructor(leg) {
	    this.data = {};
		this.arr = [];
		this.leg = leg;
	}
	put(key, value) {
		this.arr.push(key);
		if (this.arr.length > this.leg) {
			delete this.data[this.arr[0]];
			this.arr.shift();
		}
		this.data[key] = {
			value,
			index: this.arr.length-1
		};
	}
	get(key) {
		let item = this.data[key];
		if (!item) return -1;
		this.data[this.arr[this.leg-1]].index = item.index;
		item.index = this.leg-1;
		let temp = this.arr[this.arr.length-1];
		this.arr[this.arr.length-1] = this.arr[item.index];
		this.arr[item.index] = temp;
		return item.value;
	}
}

const cache = new LRUCache(2);
console.log(cache);
cache.put(1,1);
console.log(cache);
cache.put(2,2);
console.log(cache);
console.log(cache.get(1)); //返回1
console.log(cache);
cache.put(3,3); //去除key 2
console.log(cache);
console.log(cache.get(2)); //返回-1(未找到key 2)
console.log(cache);
console.log(cache.get(3));  //返回3
console.log(cache);
cache.put(4,4); //去除key 1
console.log(cache);
console.log(cache.get(1)); //返回-1
console.log(cache);
console.log(cache.get(3));  //返回3
console.log(cache);
console.log(cache.get(4));  //返回4
console.log(cache);