
function hasValue(obj) {
    return (
        obj !== null &&
        typeof obj !== "undefined"
    );
}

function arrayToObject(array, getKey) {

    var obj = {};
    
    if(
        hasValue(array) &&
        Array.isArray(array) &&
        hasValue(getKey) &&
        typeof getKey === "function"
    ){

        for(var i=0, item; i<array.length; i++){
            item = array[i];
            obj[getKey(item, i)] = item;
        }
    }   

    return obj;
    
}

function clone(obj, format){
    
    var clone = {};

    if(!hasValue(obj))
        return null;

    for(var key in obj){

        if(hasValue(format) && typeof format === "function"){
            format(clone, key, obj);
        } else {
            clone[key] = obj[key];
        }

    }

    return clone;
}

var utils = {
    hasValue: hasValue,
    arrayToObject: arrayToObject,
    clone: clone
};

module.exports = utils;