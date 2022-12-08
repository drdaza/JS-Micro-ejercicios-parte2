import listGifts from "../src/scripts/day2";

describe.skip('day2', () => {
    test('should return an object', () => {
        //given
        const letter = 'bici coche balón _playstation bici coche peluche _balón     ';
        //then
        const result = listGifts(letter);
        //when
        expect(result).toStrictEqual({
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1,
        });
    });
    
});