const { expect, test } = require('@jest/globals');
const capitalize = require('./capitalize');
const revert = require('./revert');
const calculator = require('./calculator');
const caesar = require('./caesar');
const analyze = require('./arrayanalysis');

test('is first letter capitalized', () => {
    let string = 'coconut delight'
    expect(capitalize(string)).toMatch('Coconut delight');
    expect(capitalize(string)).not.toMatch('coconut delight');
})

test('is string reverted', () => {
    let string = 'Tenet';
    expect(revert(string)).toMatch('teneT');
    string = 'this is a test';
    expect(revert(string)).toMatch('tset a si siht');
})

test('object methods', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.divide(1 , 0)).not.toBe(Infinity);
    expect(calculator.multiply(1, 3)).toBe(3);
})

test('caesar cypher', () => {
    let string = 'abc';
    expect(caesar(string, 1)).toMatch('bcd');
    string = '!%aabb';
    expect(caesar(string, 2)).toMatch('!%ccdd');
    string = "123!@#890*()"
    expect(caesar(string, 1)).toMatch('234!@#901*()');
})

test('array analyzed?', () => {
    let array = [1, 5, 4, 2, 3];
    let obj = analyze(array);
    expect(obj.average).toBe(3);
    expect(obj.min).toBe(1);
    expect(obj.max).toBe(5);
    expect(obj.length).toBe(5);
})