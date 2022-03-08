import { StyleSheet } from 'react-native'
import params from './../../helpers/params';

export default StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#BBB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderWidth: params.borderSize,
        borderColor: '#CCC',
    },
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    }
})