import { sum } from '../src/index.js'

it("should add 2 numbers and return the sum", () => {
    // Arrange
    let a = 4, 
    b = 5, 
    expected =  9

    // Act
    const actual = sum(a,b);

    // Assert
    expect(actual).toBe(expected)
}) 
it("should add null with a number and return an error", () => {
    // Arrange
    const a = null, 
    b = 5, 
    expected = 'The input is incorrect!'

    // Act
    const actual = sum(a,b);

    // Assert
    expect(actual).toBe(expected)
}) 
it("should add a number with a string and return a error", () => {
    // Arrange
    const a = 'str', 
    b = 5, 
    expected = 'are allowed';

    // Act
    const actual = sum(a,b);

    // Assert
    expect(actual).toContain(expected)
}) 