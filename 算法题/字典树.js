/**
 * 2.给定一个“扁平化”字典对象，其键以点分隔。例如，{'A'：1，'B.A'：2，'B.B'：3，'CC.D.E'：4，'CC.D.F'：5}。实现将其转换为“嵌套”字典对象的功能。在上述情况下，嵌套版本如下：
 *	{
 *	  'A'：1，
 *	  'B'：{
 *	    'A'：2
 *	    'B'：3
 *	  },
 *	  'CC'：{
 *	    'D'：{
 *	      'E'：4
 *	      'F'：5
 *	    }
 *	  }
 *	}
 */
const source = {'A':1,'B.A':2,'B.B':3,'CC.D.E':4,'CC.D.F':5};

function assignment(result, keys, value) {
	let key = keys.shift();
	if (keys.length) {
		result[key] = value;
	} else {
		result[key] = result[key] || {};
		assignment(result[key], keys, value);
	}
}
function pointSplit(obj, result = {}) {
	for (let key in obj) {
		let keys = key.split('.');
		assignment(result, keys, obj[key]);
	}
	return result;
}

console.log(pointSplit(source));
