const {sum, capitalize, reverse, calculator, cipher} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('capitalizes first letter of string', () => {
    expect(capitalize("hello")).toBe("Hello");
})

test('takes a string and returns it reversed', () => {
    expect(reverse('hello')).toBe('olleh');
})

test('calculator object and returns sum', () => {
    expect(calculator.add(1,2)).toBe(3);
})

test('calculator object to subtract 5 - 3', () => {
    expect(calculator.subtract(5,3)).toBe(2);
})

test('calculator object to multiply 5 * 5', () => {
    expect(calculator.multiply(5,5)).toBe(25);
})

test('calculator object to divide 25 / 5', () => {
    expect(calculator.divide(25,5)).toBe(5);
})

test('caesarcipher hello world by 3', () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test('caesarcihper case preservation', () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr');
})

test ('caesarcipher wrapper', () => {
    expect(cipher('xyz', 4)).toBe('bcd');
})

test('caesearcipher wrapper', () => {
    expect(cipher('XYZ', 8)).toBe('FGH');
})