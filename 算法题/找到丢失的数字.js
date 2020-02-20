/**
 * 找到丢失的数字
 * 现在你手上有n-1个数字,这些数字的范围是[1,n],且这n-1个数字中没有重复的数字.
 * 由上述条件可知:你手上的数字丢失了一个.请编写一段高效找到该缺失数字的代码.
 */


/**
 * 生成数组
 */
function genderList(length) {
	const list = new Array(length);
	for (let i=0; i < list.length; i++) {
		list[i] = i+1
	}
	list.splice(parseInt(Math.random() * length), 1);
	return list;
}

/**
 * 总数减去列表
 */
function m1(list) {
	let leg = list.length + 1;
	let sum = (leg+1) * (leg/2);
	return sum - list.reduce((v1,v2) => v1+v2);
}

/**
 * 异或计算方式
 */
function m2(list) {
	let result;
	for (let i=1; i < list.length+2; i++) {
		result = result ^ i ^ list[i-1];
	}
	return result;
}

/**
 * 测试方法
 */
function testMethod(method, list, name) {
	let begin = Date.now();
	let result = method(list);
	let end = Date.now();
	console.log(`${name}消耗时间为:${end - begin}`);
	return end - begin;
}

let source = genderList(100000000);
console.log(`倍率:${testMethod(m1, source, "方法一") / testMethod(m2, source, "方法二")}`)