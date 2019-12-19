import calculator from "../src/reducer";
import constants from "../src/constants";
const BUTTON_NUMBER_CLICK = constants.NUMBER_GROUP_BUTTONS[1][0]
const ANOTHER_BUTTON_NUMBER_CLICK = constants.NUMBER_GROUP_BUTTONS[1][1]
const BUTTON_OPERATOR_CLICK = constants.OPERATION_BUTTONS[0]
const ANOTHER_BUTTON_OPERATOR_CLICK = constants.OPERATION_BUTTONS[1]
const CALCULATION = '1+2-3*4'
const RESULTING_BUTTON = constants.OPERATION_BUTTONS[4]
test('test click number button firstly', () => {
    const expectResult = {
        lastButtonClick: BUTTON_NUMBER_CLICK, resultToDisplay: BUTTON_NUMBER_CLICK.content, operatorString: BUTTON_NUMBER_CLICK.content
    }
    const result = calculator(undefined, BUTTON_NUMBER_CLICK)
    expect(result).toEqual(expectResult);
});

test('test click operator button after clicking number button', () => {
    const lastButtonClick = BUTTON_NUMBER_CLICK
    const currentState = {
        operatorString: BUTTON_NUMBER_CLICK.content,
        resultToDisplay: BUTTON_NUMBER_CLICK.content,
        lastButtonClick
    }
    const expectResult = {
        lastButtonClick: BUTTON_OPERATOR_CLICK, resultToDisplay: lastButtonClick.content, operatorString: lastButtonClick.content + BUTTON_OPERATOR_CLICK.content
    }
    const result = calculator(currentState, BUTTON_OPERATOR_CLICK)
    expect(result).toEqual(expectResult);
});

test('test click number button after operator number button', () => {
    const lastButtonClick = BUTTON_OPERATOR_CLICK
    const currentState = {
        operatorString: BUTTON_NUMBER_CLICK.content + lastButtonClick.content,
        resultToDisplay: BUTTON_NUMBER_CLICK.content,
        lastButtonClick
    }
    const expectResult = {
        lastButtonClick: ANOTHER_BUTTON_NUMBER_CLICK, resultToDisplay: ANOTHER_BUTTON_NUMBER_CLICK.content, operatorString: currentState.operatorString + ANOTHER_BUTTON_NUMBER_CLICK.content
    }
    const result = calculator(currentState, ANOTHER_BUTTON_NUMBER_CLICK)
    expect(result).toEqual(expectResult);
});

test('test click multiple operator buttons', () => {
    const lastButtonClick = BUTTON_OPERATOR_CLICK
    const currentState = {
        operatorString: BUTTON_NUMBER_CLICK.content + lastButtonClick.content,
        resultToDisplay: BUTTON_NUMBER_CLICK.content,
        lastButtonClick
    }
    const expectResult = {
        lastButtonClick: ANOTHER_BUTTON_OPERATOR_CLICK,
        resultToDisplay: BUTTON_NUMBER_CLICK.content,
        operatorString: BUTTON_NUMBER_CLICK.content + ANOTHER_BUTTON_OPERATOR_CLICK.content
    }
    const result = calculator(currentState, ANOTHER_BUTTON_OPERATOR_CLICK)
    expect(result).toEqual(expectResult);
});

test('test click multiple number buttons', () => {
    const lastButtonClick = BUTTON_NUMBER_CLICK
    const currentState = {
        operatorString: lastButtonClick.content,
        resultToDisplay: lastButtonClick.content,
        lastButtonClick
    }
    const expectResult = {
        lastButtonClick: ANOTHER_BUTTON_NUMBER_CLICK,
        resultToDisplay: lastButtonClick.content + ANOTHER_BUTTON_NUMBER_CLICK.content,
        operatorString: lastButtonClick.content + ANOTHER_BUTTON_NUMBER_CLICK.content,
    }
    const result = calculator(currentState, ANOTHER_BUTTON_NUMBER_CLICK)
    expect(result).toEqual(expectResult);
});

test('test calculation', () => {
    const lastButtonClick = BUTTON_NUMBER_CLICK
    const currentState = {
        operatorString: CALCULATION,
        resultToDisplay: lastButtonClick.content,
        lastButtonClick
    }
    const expectResult = {
        lastButtonClick: RESULTING_BUTTON,
        resultToDisplay: '-9',
        operatorString: '-9',
    }
    const result = calculator(currentState, RESULTING_BUTTON)
    expect(result).toEqual(expectResult);
});