function analyze(array) {
    
    let length = array.length;
    let sortedArray = array.sort((a, b) => a > b ? 1 : -1);
    let max = sortedArray.pop();
    let min = sortedArray.shift();
    let sum = array.reduce((sum, el) => {
        sum = sum + el;
        return sum;
    }, 0)
    let average = sum/array.length;
    return {average, min, max, length};
    
}

module.exports = analyze;