const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        if(b === 0) {
            return console.log('dude, wtf?');
        } else {
            return a / b;
        }
    },
    multiply: function(a, b) {
        return a * b;
    }
}

module.exports = calculator;