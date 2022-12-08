import { FizzBuzz } from "../src/scripts/FizzBuzz";

describe.skip('FizzBuzz', () => {
    test('should return Fizz', () => {
        //given
        let number = 3;
        //then
        const result = FizzBuzz(number);
        //when
        expect(result).toBe("Fizz");
    });
    test("should return buzz", () => {
        //given
        let number = 5;
        //then
        const result = FizzBuzz(number);
        //when
        expect(result).toBe("Buzz");
    });
});