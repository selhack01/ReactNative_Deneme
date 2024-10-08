import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",
        padding: 15,
    },
    content: {
        flex: 1
    },
    item: {
        justifyContent: "space-between",
        backgroundColor: "#e9e9e9",
        borderColor: "#d3d3d3",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        padding: 15,
    },
    itemContent: {
        justifyContent: "center",
        width: 175
    },
    itemRightContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    footer: {
        justifyContent: "space-between",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,

    }
});