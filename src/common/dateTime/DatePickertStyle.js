import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
        position: 'absolute',
        bottom: 0,
        borderWidth: 1,
        borderColor: "#000000"
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 55,
        paddingVertical: 10,
        
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000000",
       

    },
    txt: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    screen: {
        flex: 1,
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    },
    textDate: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})