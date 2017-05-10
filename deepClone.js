const deepClone = (obj, stack = []) => {
	// if not object or array, return directly
	if (typeof obj !== 'object') return obj

	// check to see if obj has been pushed to stack
	for (let i = 0; i < stack.length; i++) {
		const item = stack[i]
		if (item.origin === obj) { return item.copy }
	}

	const isArray = Array.isArray(obj)
	const result = isArray ? [] : {}

	stack.push({ origin: obj, copy: result })

	if (isArray) {
		obj.forEach((item, i) => {
			result[i] = deepClone(item, stack)
		})
	} else {
		const keys = Object.keys(obj)
		keys.forEach((key) => {
			result[key] = deepClone(obj[key], stack)
		})
	}

	stack.pop()
	return result
}