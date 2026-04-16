import { StyleSheet } from "react-native";

const NavBarStyles = StyleSheet.create({
    nav: {
        height: 80,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "#8e8e41",
        backgroundColor:"#fff",
    },
    title:{
        fontSize: 15,
    },
    icon:{
        marginTop: 5,

    }
})
export default NavBarStyles;
