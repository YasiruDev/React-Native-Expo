import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Form, TextValidator } from 'react-native-validator-form';
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import { regCustomer } from './../Actions/'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
        this.gotoLogin = this.gotoLogin.bind(this);

    }
    gotoLogin() {
        this.props.navigation.navigate('Login');
    };

    componentWillMount() {
        Form.addValidationRule('isMobile', (value) => {
            var mob = /^((\+947|947|07|7)(0|1|2|5|6|7|8)[0-9]{7})$/;
            if (mob.test(value) === false) {
                return false;
            }
            else {
                return true;
            }

        });
    }
    componentWillUnmount() {
        Form.removeValidationRule('isMobile');
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.register !== nextProps.register) {
            this.props.navigation.navigate('Login', { message: nextProps.register.msg });
        }
    }

    handleName = (event) => {
        const { user } = this.state;
        user.cName = event;
        this.setState({ user });
    }

    handleMobile = (event) => {
        const { user } = this.state;
        user.mobile = event;
        this.setState({ user });
    }
    handleEmail = (event) => {
        const { user } = this.state;
        user.email = event;
        this.setState({ user });
    }
    handlePassword = (event) => {
        const { user } = this.state;
        user.password = event;
        this.setState({ user });
    }
    submit = () => {
        console.log("submit --->", this.state.user)
        this.props.regCustomer(this.state.user)
    }

    handleSubmit = () => {

        this.refs.form.submit();
    }

    render() {
        const { user } = this.state;
        console.log("register --->", this.props.register)
        return (
            <RootComponent>
                <View style={styles.screen}>
                    <BodyBold>Sign Up</BodyBold>

                    <Form
                        ref="form" onSubmit={this.submit}>
                        <TextValidator
                            name="cName"
                            label="Name"
                            validators={['required']}
                            errorMessages={['This field is required']}
                            placeholder="Name"
                            type="text"
                            value={user.cName}
                            onChangeText={this.handleName.bind(this)}
                        />
                        <TextValidator
                            name="mobile"
                            label="Mobile"
                            validators={['required', `isMobile`]}
                            errorMessages={['This field is required', 'Invalid mobile']}
                            placeholder="Mobile"
                            type="text"
                            value={user.mobile}
                            onChangeText={this.handleMobile.bind(this)}
                        />
                        <TextValidator
                            name="email"
                            label="email"
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'Email invalid']}
                            placeholder="Your email"
                            type="text"
                            keyboardType="email-address"
                            value={user.email}
                            onChangeText={this.handleEmail.bind(this)}
                        />
                        <TextValidator
                            name="password"
                            label="Password"
                            secureTextEntry
                            validators={['required']}
                            errorMessages={['This field is required']}
                            placeholder="Password"
                            type="text"
                            value={user.password}
                            onChangeText={this.handlePassword.bind(this)}
                        />
                        <Button
                            title="Register"
                            onPress={this.handleSubmit}
                        />
                    </Form>

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


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ regCustomer }, dispatch);
}


function mapStateToProps({ register }) {
    return { register }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

