/**
 * Converts one JSON object to another using maps specified with from->to array
 *
 * obj {JSON Object} - Object need be converted,
 * source {string} - Comma-separated list of properties the object has
 * target {string} - Comma-separated list of properties the new object has have
 * isRecurcive {boolean} - True if nested objects should be converted too
 */
function map(obj, source, target, isRecursive = true) {
	// Check if parameters have invalid types
	if ((typeof obj) != "object") throw new TypeError("The object should be JSON");
	if ((typeof source) != "string") throw new TypeError("Source should be string");
	if ((typeof target) != "string") throw new TypeError("Target should be string");

	// result object init
	let res = {};

	// get array of properties need to be converted
	let propS = source.replace(/ /g, '').split(",");
	let propT = target.replace(/ /g, '').split(",");
 
 	// each property is checked ...
	for (let propertyName in obj) {
		// take into account that JSON object can have nested objects
		if (isRecursive && ((typeof obj[propertyName]) == "object"))
			obj[propertyName] = map(obj[propertyName], source, target, isRecursive);

		// ... if need be converted or not
		let propIndexInSource = propS.indexOf(propertyName);
		if (propIndexInSource != -1) {
			res[propT[propIndexInSource]] = obj[propertyName];
		} else {
			res[propertyName] = obj[propertyName];
		}
	}

	return res;
};

exports.map = map;