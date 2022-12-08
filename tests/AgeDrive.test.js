import { AgeYouDrive } from "../src/scripts/AgeDrive";
describe.skip('JavaScript exersise 2', () => {
    test.skip('should return an object', () => {
        //given
        const user = 'David';
        const age = 23;
        //then
        const result = AgeYouDrive(age,user);
        //when
        expect(result).toBe(`${user} you can drive`);
    });
    
});