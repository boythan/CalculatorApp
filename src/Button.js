import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import styles from './styles';
export default function Button({ content = "", onPress }) {
    const [buttonContent, setButtonContent] = useState("")

    useEffect(function () {
        setButtonContent(content)
    }, [content]);

    return <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress && onPress()}>
        <Text >{buttonContent}</Text>
    </TouchableOpacity>
}