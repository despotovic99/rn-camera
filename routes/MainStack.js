import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Pocetni from "../screens/Pocetni";
import Fingerprint from "../screens/Fingerprint";
import Kamera from "../screens/Kamera";

const screens = {
    Fingerprint: {
        screen: Fingerprint
    },
    Pocetni: {
        screen: Pocetni
    },
    Kamera: {
        screen: Kamera
    }

}

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack)