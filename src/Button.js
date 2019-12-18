import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import styles from './styles';
export default function Button({ content = "", onPress }) {
    return <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress && onPress()}>
        <Text >{content}</Text>
    </TouchableOpacity>
}