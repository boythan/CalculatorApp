import calculator from "../src/reducer";

test('test get container quantity', () => {
    const expectResult = {
        lastButtonClick: {
            content: "9",
            type: "NUMBER"
        }, resultToDisplay: "9", operatorString: "9"
    }
    const result = calculator(undefined, {
        content: "9",
        type: "NUMBER"
    })
    expect(result).toEqual(expectResult);
});