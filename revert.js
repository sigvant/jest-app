function revert(string) {
    let array = string.split('');         
    let newArray = [];
    array.forEach(i => {
        newArray.unshift(i);
    })
    let revertedString = newArray.join('');
    return revertedString;
}

module.exports = revert;
