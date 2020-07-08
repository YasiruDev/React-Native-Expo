import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, TextInput, ImageBackground, TouchableOpacity, Button, TouchableHighlight } from "react-native";
import { Form, TextValidator } from 'react-native-validator-form';
import bg_image from './../assets/images/bg_main.png'
import btn from './../assets/images/btn.png'
import styles from './../Styles/styles';
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import { regCustomer } from './../Actions/'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };


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

                {/* <ImageBackground source={bg_image} style={styles.main_bg}>
                        <View style={styles.screen_flex_3}>

                            <Text style={styles.white_header_text}>Sign up</Text>
                            <Form
                                style={styles.screen_flex_1}
                                ref="form" onSubmit={this.submit}>
                                <TextValidator
                                    style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                    style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                    style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                    style={styles.text_input_basic} placeholderTextColor="#FFF"
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

                            </Form>
                            <TouchableOpacity activeOpacity={1} onPress={this.handleSubmit} style={styles.btn_green}>
                                <ImageBackground source={btn} style={styles.button_bg}>
                                    <Text style={styles.btn_text}>Sign up</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.screen_flex_2}>

                            <TouchableOpacity activeOpacity={1} onPress={this.gotoLogin.bind(this)} style={styles.text_link_wrap}>
                                <Text style={styles.text_link}>I already have an account</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground> */}
                <ImageBackground source={bg_image} style={styles.container}>
                    
                        <Form
                            style={styles.screen_flex_1}
                            ref="form" onSubmit={this.submit}>

                            <Text style={styles.white_header_text}>Sign up</Text>

                            <TextValidator
                                style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                                style={styles.text_input_basic} placeholderTextColor="#FFF"
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
                            <View style={{ marginTop: "5%" }}>
                                <TouchableOpacity activeOpacity={1} onPress={this.handleSubmit} style={styles.btn_green}>
                                    <ImageBackground source={btn} style={styles.button_bg}>
                                        <Text style={styles.btn_text}>Sign in</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity activeOpacity={1} onPress={this.gotoLogin.bind(this)} style={styles.text_link_wrap}>
                                    <Text style={styles.text_link}>I already have an account</Text>
                                </TouchableOpacity>
                            </View>
                        </Form>
                   
                </ImageBackground>
            </RootComponent>
        );
    }
}

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1
//     }
// });


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ regCustomer }, dispatch);
}


function mapStateToProps({ register }) {
    return { register }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

