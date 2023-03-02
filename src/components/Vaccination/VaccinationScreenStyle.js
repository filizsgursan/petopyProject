import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8c8ab5",
        flex: 1,
        paddingVertical:24,
        paddingHorizontal: 16
    },
    calendarIconStyle: {
        fontSize: 22,
        marginRight: 10,
        marginLeft: 16
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 9,
        textAlign: "left",
        fontWeight: "normal",
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: "100%",
        borderWidth: 1,
        borderColor: "#000000"

    },

    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0
    },
    buttonStyle: {
        height: 44,
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#dc3545",
        marginTop: 24,
        backgroundColor: "#dc3545",
        justifyContent: "center",
        borderRadius: 16
    }
})