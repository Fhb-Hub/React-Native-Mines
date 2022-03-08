import { StyleSheet } from 'react-native'
import params from './../../helpers/params';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
  
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        borderWidth: params.borderSize,
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    buttonLabel: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    }
})