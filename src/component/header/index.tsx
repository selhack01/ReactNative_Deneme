import { Text } from "ncore-mobile";
import { View } from "react-native";
import stylesheet from "./stylesheet";


const Header = (children: string) => {
    return <View style={stylesheet.header}>
        <Text
            variant="header5"
            color="info"
        >{children}</Text>
    </View>
}

export default Header;