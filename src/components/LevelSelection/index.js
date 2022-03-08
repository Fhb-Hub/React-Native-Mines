import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Level from './../Level';
import styles from './style';

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select Level</Text>
                    <Level level='Easy' onLevelSelected={props.onLevelSelected} />
                    <Level level='Normal' onLevelSelected={props.onLevelSelected} />
                    <Level level='Hard' onLevelSelected={props.onLevelSelected} />
                </View>
            </View>
        </Modal>

    );
}