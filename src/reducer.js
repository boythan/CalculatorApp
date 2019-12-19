import constants from "./constants"
const initialState = {
    operatorString: '',
    resultToDisplay: '0',
    lastButtonClick: null
}
function calculator(state = initialState, button) {
    const { lastButtonClick, operatorString, resultToDisplay } = state
    switch (button.type) {
        case constants.BUTTON_TYPE.NUMBER:
            let resultToDis = operatorStr = button.content;
            if (lastButtonClick && lastButtonClick.type !== constants.BUTTON_TYPE.OPERATOR && lastButtonClick.type !== constants.BUTTON_TYPE.RESULTING) {
                resultToDis = resultToDisplay + button.content
            }
            if (lastButtonClick && lastButtonClick.type !== constants.BUTTON_TYPE.RESULTING) {
                operatorStr = operatorString + button.content
            }
            return { lastButtonClick: button, resultToDisplay: resultToDis, operatorString: operatorStr }
        case constants.BUTTON_TYPE.OPERATOR:
            if (!lastButtonClick) {
                return initialState;
            } else if (lastButtonClick.type === constants.BUTTON_TYPE.OPERATOR) {
                return { ...state, lastButtonClick: button, operatorString: operatorString.slice(0, -1) + button.content }
            } else {
                return { ...state, lastButtonClick: button, operatorString: operatorString + button.content }
            }
        case constants.BUTTON_TYPE.RESULTING:
            try {
                const result = eval(operatorString) + ''
                if (result === constants.INFINITY_NUMBER) {
                    return { lastButtonClick: null, resultToDisplay: result, operatorString: '' }
                }
                return { lastButtonClick: button, resultToDisplay: result, operatorString: result }
            } catch (error) {
                alert(error.message)
            }
            return initialState
        case constants.BUTTON_TYPE.CLEAR:
            return initialState
        default:
            return initialState
    }
}
export default calculator