const source = [23,45,12,234,643,12,432,54,214];

/**
 * 冒泡排序
 */
function bubbleSort(arr) {
	for (let i=0; i < arr.length; i++) {
		for (let j=0; j < arr.length-1; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

/**
 * 快速排序
 */
function quickSort(arr) {
	if (arr.length <= 1) return arr;
	let pivot = arr.shift();
	let left = [], right = [];
	arr.forEach(item => item < pivot ? left.push(item) : right.push(item));
	return quickSort(left).concat([pivot], quickSort(right));
}