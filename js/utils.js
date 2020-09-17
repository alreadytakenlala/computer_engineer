/**
 * 深克隆
 * @param obj 要拷贝的对象
 */
export function deepClone(obj = {}) {
	if (typeof obj !== "object" || obj == null) {
		return obj;
	}
	let result = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		obj.hasOwnProperty(key) && (result[key] = deepClone(obj[key]));
	}
	return result;
}

/**
 * 防抖
 */
export function debounce(func, wait) {
	let timeout = null;
	return function () {
		if (timeout) {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func.call(this, ...arguments);
				timeout = null;
			}, wait);
		} else {
			timeout = true;
			func.call(this, ...arguments);
		}
	}
}

/**
 * 节流
 */
export function waterTap(func, delay) {
	let prev = Date.now();
	return () => {
		const now = Date.now();
		if (now - prev >= delay) {
			func.call(this, ...arguments);
			prev = now;
		}
	}
}