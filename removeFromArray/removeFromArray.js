const removeFromArray = function(array) {
    // remove one specified value
    // remove more than one specific value
    // if not exist then ignore
    // remove strings
    let args = Array.prototype.slice.call(arguments, 1);
    for (let i of args){
        let index = array.indexOf(i);
        if (index > -1) array.splice(index, 1);
    }
    return array;
}

module.exports = removeFromArray
