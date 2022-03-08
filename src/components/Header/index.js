import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import Flag from './../Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity style={styles.flagButton}
                    onPress={props.onFlagPress} >
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>
                    = {props.flagsLeft}
                </Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={props.onNewGame} >
                <Text style={styles.buttonLabel}>
                    New Game
                </Text>
            </TouchableOpacity>
        </View>
    );
}
