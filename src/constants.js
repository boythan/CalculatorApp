const INFINITY_NUMBER = 'Infinity'
const BUTTON_TYPE = {
    NUMBER: 'NUMBER',
    OPERATOR: 'OPERATOR',
    CLEAR: 'CLEAR',
    RESULTING: 'RESULTING'
}
const NUMBER_GROUP_BUTTONS = [
    [
        { content: '7', type: BUTTON_TYPE.NUMBER },
        { content: '8', type: BUTTON_TYPE.NUMBER },
        { content: '9', type: BUTTON_TYPE.NUMBER },
    ],
    [
        { content: '4', type: BUTTON_TYPE.NUMBER },
        { content: '5', type: BUTTON_TYPE.NUMBER },
        { content: '6', type: BUTTON_TYPE.NUMBER },
    ],
    [
        { content: '1', type: BUTTON_TYPE.NUMBER },
        { content: '2', type: BUTTON_TYPE.NUMBER },
        { content: '3', type: BUTTON_TYPE.NUMBER },
    ],
    [
        { content: 'C', type: BUTTON_TYPE.CLEAR },
        { content: '0', type: BUTTON_TYPE.NUMBER },
        { content: '.', type: BUTTON_TYPE.NUMBER },
    ]
]

const OPERATION_BUTTONS = [
    { content: '/', type: BUTTON_TYPE.OPERATOR },
    { content: '*', type: BUTTON_TYPE.OPERATOR },
    { content: '+', type: BUTTON_TYPE.OPERATOR },
    { content: '-', type: BUTTON_TYPE.OPERATOR },
    { content: '=', type: BUTTON_TYPE.RESULTING },
]
export default { NUMBER_GROUP_BUTTONS, OPERATION_BUTTONS, BUTTON_TYPE, INFINITY_NUMBER }