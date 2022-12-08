import { AsignDNIVersion2 } from "../src/scripts/AsignDNI";

describe.skip('JavaScript exersise 2', () => {
    test.skip('should return an object', () => {
        //given
        const user = {
            numberDni: '99999999',
            letterDni: ''
        }
        
        //then
        const result = AsignDNIVersion2(user)
        //when
        expect(result).toStrictEqual({numberDni: '99999999',
        letterDni: 'R'});
    });
    
});