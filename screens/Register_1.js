import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.gotoLogin = this.gotoLogin.bind(this)
    }
    gotoLogin() {
        this.props.navigation.navigate('Login');
    };


    render() {
        
        return (
            <RootComponent>
                <View style={styles.screen}>
                    <BodyBold>Sign Up</BodyBold>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Name" />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
                        placeholder="Mobile" />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="E-mail" />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
                        placeholder="Password" />
                    <Button onPress={this.gotoLogin.bind(this)} title='Continue' />

                    <Text>I already have an account</Text>
                    <Button onPress={this.gotoLogin} title='Login' />

                </View>
            </RootComponent>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default Register;
