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
		obj.hasOwnProperty(key) && obj[key] = deepClone(obj[key]);
	}
	return result;
}
