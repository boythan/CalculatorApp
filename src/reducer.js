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
            if (!lastButtonClick) {
                return {
                    lastButtonClick: button,
                    resultToDisplay: button.content,
                    operatorString: button.content
                }
            } else if (lastButtonClick.type === constants.BUTTON_TYPE.OPERATOR) {
                return {
                    lastButtonClick: button,
                    resultToDisplay: button.content,
                    operatorString: operatorString + button.content

                }
            } else if (lastButtonClick.type === constants.BUTTON_TYPE.RESULTING) {
                return {
                    lastButtonClick: button,
                    resultToDisplay: button.content,
                    operatorString: button.content

                }
            } else {
                return {
                    lastButtonClick: button,
                    resultToDisplay: resultToDisplay + button.content,
                    operatorString: operatorString + button.content
                }
            }
        case constants.BUTTON_TYPE.OPERATOR:
            if (!lastButtonClick) {
                return initialState;
            } else if (lastButtonClick.type === constants.BUTTON_TYPE.OPERATOR) {
                return {
                    lastButtonClick: button,
                    resultToDisplay: resultToDisplay,
                    operatorString: operatorString.slice(0, -1) + button.content
                }
            }
            return {
                lastButtonClick: button,
                resultToDisplay: resultToDisplay,
                operatorString: operatorString + button.content
            }

        case constants.BUTTON_TYPE.RESULTING:
            try {
                const result = eval(operatorString)
                if (result === constants.INFINITY_NUMBER) {
                    return {
                        lastButtonClick: null,
                        resultToDisplay: result,
                        operatorString: ''
                    }
                }
                return {
                    lastButtonClick: button,
                    resultToDisplay: result,
                    operatorString: result
                }
            } catch (error) {
                alert(error.message)
            }
            return initialState


        case constants.BUTTON_TYPE.CLEAR:
            return initialState
        default:
            return {
                resultToDisplay: resultToDisplay,
                operatorString: operatorString
            }
    }
}

export default calculator