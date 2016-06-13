//aStack, bStack为内部递归时调用，以应付遇obj1这种情况，
//var obj1={t1:"ying",};obj1.self=obj1;
var deepClone = function(obj, aStack, bStack) {
	//不是对象，数组，则直接返回
	if (typeof obj !== 'object') return obj;

	//深度优先算法
	aStack = aStack || [];
	bStack = bStack || [];
	
	// 查看是否出现自引用
	var length = aStack.length;
	while (length--) {
		if (aStack[length] === obj) return bStack[length];
	}

	var isArray = _.isArray(obj);
	var result = isArray ? [] : {};
	aStack.push(obj);		// 存储指向obj的指针
	bStack.push(result);	// 存储深复制obj的对象

	if (isArray) {
		var length = obj.length;
		while (length--) {
			result[length] = deepClone(obj[length], aStack, bStack);
		}
    } else {
		var keys = _.keys(obj);
		for (var i = 0, len = keys.length; i < len; i++) {
			result[keys[i]] = deepClone(obj[keys[i]], aStack, bStack);
		}
    }

	aStack.pop();
	bStack.pop();
	return result;
}