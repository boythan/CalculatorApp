import React from 'react';
import { View, Text } from "react-native"
import styles from './styles';
import Button from './Button';
import constants from './constants';
export default function CalculatorScreen(props) {
    const renderInputFrame = () => {
        return <View style={styles.inputContainer}>
            <View style={styles.numberInputContainer}>
                {constants.NUMBER_GROUP_BUTTONS.map(buttonGroup => {
                    return <View style={{ flexDirection: 'row' }}>
                        {buttonGroup.map(button => <Button
                            content={button.content}
                        />)}
                    </View>
                })}
            </View>
            <View style={styles.operationInputContainer}>
                {constants.OPERATION_BUTTONS.map(button => {
                    return <View style={{ flexDirection: 'row' }}>
                        <Button
                            content={button.content}
                        />
                    </View>
                })}
            </View>
        </View>
    }
    const renderResultFrame = () => {
        return <View style={styles.resultContainer}>
            <Text>This is result frame</Text>
        </View>
    }
    return <View style={styles.screenContainer}>
        {renderResultFrame()}
        {renderInputFrame()}
    </View>
}