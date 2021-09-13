function capitalize(string) {
    let firstLetter = string.charAt(0);
    let UppercaseFirstLetter = firstLetter.toUpperCase();
    let finalString = UppercaseFirstLetter + string.substring(1);
    return finalString;
}

module.exports = capitalize;