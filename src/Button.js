import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import styles from './styles';
export default function Button(props) {
    return <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.numberText}>{props.content}</Text>
    </TouchableOpacity>
}