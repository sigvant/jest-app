function caesar(string, step) {

    let exceptionsArray = [33, 34, 35, 36, 37, 38, 39, 40, 41,
        42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91,
        92, 93, 94, 95, 123, 124, 125, 126];

    function charCodify(string) {
        let arrayOfCharCodes = [];
        for (let i = 0; i < string.length; i++) {
            arrayOfCharCodes[i] = string.charCodeAt(i);
        }
        return arrayOfCharCodes;
    }

    function cypherfyArray(array, step) {
        
        return array.map((el) => {
            if(exceptionsArray.includes(el)) {
                return el;
            } else if (el == 122) {
                return 97 + (step - 1);
            } else if (el == 57) {
                return 48 + (step - 1);
            } else {
                return el + step;
            }
        });
    }

    function stringifyCypherfiedArray(array) {
        return String.fromCharCode(...array);
    }
    
    let loweredString = string.toLowerCase();
    let arrayOfCharCodes = charCodify(loweredString);
    let cypheredArray = cypherfyArray(arrayOfCharCodes, step);
    let stringifiedCypher = stringifyCypherfiedArray(cypheredArray);
    
    console.log(`Your message was:\n ${string}`);
    console.log(`Now it is:\n ${stringifiedCypher}`);

    return stringifiedCypher;
}

module.exports = caesar;