import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import bg_image from './../assets/images/bg_main.png'
import btn from './../assets/images/btn.png'
import app_logo from './../assets/images/app_logo.png'
import styles from './../Styles/styles';
import { login, checkAlert } from '../Actions'
import { Form, TextValidator } from 'react-native-validator-form';
import { AsyncStorage } from "react-native";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      message: '',
      showAlert: false
    };

    this.register = this.register.bind(this)

  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((data) => {
      if (data !== null) {
        this.props.navigation.navigate('Dashboard');
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
    const { params } = nextProps.navigation.state;
    if (nextProps.signIn) {
      navigate('Dashboard');
    }
    if (params && params.message) {
      this.setState({ message: params.message, showAlert: true });
    }

  }


  register() {
    this.props.navigation.navigate('Register');
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
    this.props.login(this.state.user)
  }

  handleSubmit = () => {

    this.refs.form.submit();
  }


  render() {
    const { signIn } = this.props;
    const { user } = this.state;
    // console.log("Paramas ---> ", this.props.navigation.state)
    return (
      <RootComponent>

        {/* <ImageBackground source={bg_image} style={styles.main_bg}>
          <View style={styles.screen_flex_3}>
            <View style={styles.screen_flex_1}>
              <Image source={app_logo} style={styles.login_logo} />
            </View>
            <Form
              style={styles.screen_flex_1}
              ref="form" onSubmit={this.submit}>

              <Text style={styles.white_header_text}>Sign in</Text>

              <TextValidator
                style={styles.text_input_basic} placeholderTextColor="#FFF"
                name="email"
                label="E-mail"
                validators={['required']}
                errorMessages={['E-mail is required']}
                placeholder="Your E-mail"
                type="text"
                value={user.email}
                onChangeText={this.handleEmail.bind(this)}
              />
              <TextValidator
                style={styles.text_input_basic} placeholderTextColor="#FFF"
                name="password"
                label="Password"
                secureTextEntry
                validators={['required']}
                errorMessages={['Password is required']}
                placeholder="Your Password"
                type="text"
                value={user.password}
                onChangeText={this.handlePassword.bind(this)}
              />

              <TouchableOpacity activeOpacity={1} onPress={this.handleSubmit} style={styles.btn_green}>
                <ImageBackground source={btn} style={styles.button_bg}>
                  <Text style={styles.btn_text}>Sign in</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Form>
          </View>

          <View style={styles.screen_flex_2}>
            <TouchableOpacity activeOpacity={1} onPress={this.register} style={styles.text_link_wrap}>
              <Text style={styles.text_link}>I don't have an account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground> */}
        <ImageBackground source={bg_image} style={styles.container}>
          <View style={styles.align_center}>
          <Image source={app_logo} style={styles.login_logo} />
          </View>
          <Form
            style={styles.screen_flex_1}
            ref="form" onSubmit={this.submit}>

            <Text style={styles.white_header_text}>Sign in</Text>

            <TextValidator
              style={styles.text_input_basic} placeholderTextColor="#FFF"
              name="email"
              label="E-mail"
              validators={['required','isEmail']}
              errorMessages={['E-mail is required','Email invalid']}
              placeholder="Your E-mail"
              type="text"
              value={user.email}
              onChangeText={this.handleEmail.bind(this)}
            />
            <TextValidator
              style={styles.text_input_basic} placeholderTextColor="#FFF"
              name="password"
              label="Password"
              secureTextEntry
              validators={['required']}
              errorMessages={['Password is required']}
              placeholder="Your Password"
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
              <TouchableOpacity activeOpacity={1} onPress={this.register} style={styles.text_link_wrap}>
                <Text style={styles.text_link}>I don't have an account</Text>
              </TouchableOpacity>
            </View>
          </Form>
         
        </ImageBackground>
      </RootComponent>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, checkAlert }, dispatch);
}

function mapStateToProps({ signIn }) {
  return { signIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
