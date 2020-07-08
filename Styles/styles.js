import { StyleSheet } from "react-native"
import { block } from "react-native-reanimated"

export default StyleSheet.create({
    screen_flex_1: {
        flex: 1,
        alignItems: "center",
    },
    screen_flex_2: {
        flex: 0.8,
        alignItems: "center",
    },
    screen_flex_3: {
        flex: 3,
        alignItems: "center",
    },
    main_bg: {
        resizeMode: "stretch",
        height: "100%",
        width: "100%",
    },
    text_input_basic: {
        margin: 20,
        // borderBottomColor:"#FFF",
        // borderBottomWidth:1,
        height: 40,
        width: 300,
        color: "#FFF"
    },
    white_header_text: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
    },
    btn_green: {
        flexDirection: "row",
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        elevation: 3,
        width: 250,
    },
    btn_text: {
        color: "#FFF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_bg: {
        height: 54,
        resizeMode: "stretch",
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_link_wrap: {
        marginTop: 30,
    },
    text_link: {
        color: "#229968"
    },
    login_logo: {
        marginTop: 50,
    },
    // yasiru
    basic_text: {
        color: "#FFF",
        fontSize: 12,
    },
    order_history_text: {
        color: "#808080",
        fontSize: 15,
    },
    profilePicture: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginTop: 10,
    },
    container: {
        flex: 1,
       
    },
    align_center : {
        alignItems: 'center',
        justifyContent: 'center',
    }
})