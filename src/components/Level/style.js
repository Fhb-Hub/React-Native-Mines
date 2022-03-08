import { StyleSheet } from 'react-native'
import params from './../../helpers/params';

export default StyleSheet.create({
    button: {
        backgroundColor: '#999',
        borderWidth: params.borderSize,
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        alignItems: 'center',
        width: 100,
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginTop: 10
    },
    buttonLabel: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#65C113'
    },
    bgNormal: {
        backgroundColor: '#13A1C1'
    },
    bgHard: {
        backgroundColor: '#C11328'
    }
})