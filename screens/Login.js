import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

import { login } from '../Actions'

import bg_image from './../assets/images/bg_main.png'
import btn from './../assets/images/btn.png'
import app_logo from './../assets/images/app_logo.png'

import styles from './../Styles/styles';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
    if (nextProps.signIn) {
      navigate('Dashboard');
    }

  }

  login() {
    const { login } = this.props;
    login('hii');
  }
  register() {
    this.props.navigation.navigate('Register');
  }
  
  render() {
    const { signIn } = this.props;
    console.log("signInsign------->", signIn)

    return (
      <RootComponent>
        
        <ImageBackground source={bg_image} style={styles.main_bg}>
          <View style={styles.screen_flex_3}>
              <View style={styles.screen_flex_1}>
                <Image source={app_logo} style={styles.login_logo} />
              </View>
              <View style={styles.screen_flex_1}>
                  <Text style={styles.white_header_text}>Sign in</Text>
                  <TextInput style={styles.text_input_basic} placeholderTextColor="#FFF" placeholder="Your email" />
                  <TextInput style={styles.text_input_basic} placeholderTextColor="#FFF" placeholder="Your password" />
              </View>
              
          </View>
          <View style={styles.screen_flex_1}>
                <TouchableOpacity activeOpacity={1} onPress={this.login} style={styles.btn_green}>
                  <ImageBackground source={btn} style={styles.button_bg}>
                    <Text style={styles.btn_text}>Sign in</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.register} style={styles.text_link_wrap}>
                    <Text style={styles.text_link}>I don't have an account</Text>
                </TouchableOpacity>
          </View>
        </ImageBackground>
      </RootComponent>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

function mapStateToProps({ signIn }) {
  return { signIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
