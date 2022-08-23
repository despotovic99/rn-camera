import React from 'react';
import {Button, Text, View} from "react-native";

function Pocetni(props) {

    const cameraStart = () => {
        props.navigation.navigate('Kamera');
    }

    return (
        <View>
            <Text>Pocetni ekran</Text>
            <Button title={"Pokreni kameru"} onPress={cameraStart}/>
        </View>
    );
}

export default Pocetni;