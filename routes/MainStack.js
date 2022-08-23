import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Pocetni from "../screens/Pocetni";
import Fingerprint from "../screens/Fingerprint";

const screens = {
    Fingerprint: {
        screen: Fingerprint
    },
    Pocetni: {
        screen: Pocetni
    }

}

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack)