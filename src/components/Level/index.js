import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style';

export default props => {

    if (props.level === 'Easy') {
        var styleLevel = styles.bgEasy
        var difficult = 0.1
    } else if (props.level === 'Normal') {
        difficult = 0.2
        styleLevel = styles.bgNormal
    } else {
        difficult = 0.3
        styleLevel = styles.bgHard
    }

    return (
        <TouchableOpacity
            style={[styles.button, styleLevel]}
            onPress={() => props.onLevelSelected(difficult)}>
            <Text style={styles.buttonLabel}>{props.level}</Text>
        </TouchableOpacity>
    )
}
