//general Javascript helper functions. Can come in handy

//removes repeating values and returns just one wanted row in an array
//var uniquify_array_and_select_row = function(arr, selector, ignored_value=undefined) {
export function uniquify_array_and_select_row(arr, selector, ignored_value=undefined) {
	var lookup = {};
	var items = arr.map(function(doc){return (doc[selector])});
	var result = [];

	for (var item, i = 0; item = items[i++];) {
		if (item == ignored_value) continue;
	  if (!(item in lookup)) {
	    lookup[item] = 1;
	    result.push(item);
	  }
	}
	return (result);
};

export function isEmpty(obj) {	//check if object is empty
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
};

export function denegate_zero(number) {
	if (Number(number) == -0) return 0;
};

export function are_objects_own_properties_equal(obj1, obj2) {
		for (var own_property in obj1) {
			    if (obj1.hasOwnProperty(own_property) && obj2.hasOwnProperty(own_property)) {
			    	if(obj1[own_property] != obj2[own_property]) return false;
			      	}
			    else return false;
		};
		return true;
};

export function objLength(obj) {
	var length = 0;
	for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) length++;
    };
    return length;
}

