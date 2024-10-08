import { Button } from "ncore-mobile";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "white",
        textAlign: "center",
        padding: 15,
    },
    content: {
        flex: 1
    },
    listHeader: {
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        padding: 15,
    },
    item: {
        backgroundColor: "#e9e9e9",
        justifyContent: "space-between",
        borderColor: "#d3d3d3",
        alignItems: "center",
        flexDirection: "row",
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