import React, { useState } from 'react';
import { View, Text } from "react-native"
import styles from './styles';
import Button from './Button';
import constants from './constants';
export default function CalculatorScreen(props) {
    const [result, setResult] = useState(0)

    const onClickButton = (button) => {
        setResult(button.content)
    }
    const renderInputFrame = () => {
        return <View style={styles.inputContainer}>
            <View style={styles.numberInputContainer}>
                {constants.NUMBER_GROUP_BUTTONS.map(buttonGroup => {
                    return <View style={{ flexDirection: 'row' }}>
                        {buttonGroup.map(button => <Button
                            onPress={() => onClickButton(button)}
                            content={button.content}
                        />)}
                    </View>
                })}
            </View>
            <View style={styles.operationInputContainer}>
                {constants.OPERATION_BUTTONS.map(button => {
                    return <View style={{ flexDirection: 'row' }}>
                        <Button
                            onPress={() => onClickButton(button)}
                            content={button.content}
                        />
                    </View>
                })}
            </View>
        </View>
    }
    const renderResultFrame = () => {
        return <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    }
    return <View style={styles.screenContainer}>
        {renderResultFrame()}
        {renderInputFrame()}
    </View>
}