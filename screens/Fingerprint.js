import React from 'react';
import {Button, Text, View} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import {useEffect, useState} from "react";

export default function Fingerprint(props) {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible)
        })();
    })

    function removeAuth() {
        setIsAuthenticated(false);
    }

    function onAuth() {

        if (!isAuthenticated) {
            const auth = LocalAuthentication.authenticateAsync({
                promptMessage: "Dodirnite senzor za otisak prsta",
            });
            auth.then((result) => {
                setIsAuthenticated(result.success);
                console.log(result)
                if (result.success) {
                    props.navigation.navigate('Pocetni')
                }
            })
        } else {
            props.navigation.navigate('Pocetni')
        }


    }

    return (
        <View>
            {
                isAuthenticated ?
                    <Text>Identitet potvrdjen</Text>
                    :
                    <Text>Otisak prsta ekran</Text>}
            {
                isAuthenticated ? <Button title={'Ukloni potvrdu'} onPress={removeAuth}/> :<></>
            }
            <Button title={isAuthenticated ? "Pokreni aplikaciju" : "Potvrdi identitet"} onPress={onAuth}/>
        </View>
    );
}
