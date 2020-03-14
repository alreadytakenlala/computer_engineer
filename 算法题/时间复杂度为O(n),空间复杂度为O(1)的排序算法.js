// 1.给定一个整数数组[[6，4，-3，5，-2，-1，0，1，-9]，实现一个函数，将所有正数向左移动，并将所有负数向右移动。尽力将其时间复杂度设为O（n），并将空间复杂度设为O（1）。
const source1 = [6,4,-3,5,-2,-1,0,1,-9];

function sortArray(arr) {
	let index;
	for (let i=0; i<arr.length; i++) {
		if (arr[i] < 0 && index === undefined) {
			index = i;
		}
		if (arr[i] > 0 && index !== undefined) {
			let temp = arr[i];
			arr[i] = arr[index];
			arr[index] = temp;
			i = index;
			index = undefined;
		}
	}
	return arr;
}
console.log(sortArray(source1));