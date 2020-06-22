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
                  <Text style={styles.white_header_text}>Sign up</Text>
                    <TextInput placeholder="Name" placeholderTextColor="#FFF"  style={styles.text_input_basic} />
                    <TextInput placeholder="Mobile" placeholderTextColor="#FFF"  style={styles.text_input_basic} />
                    <TextInput placeholder="E-mail" placeholderTextColor="#FFF"  style={styles.text_input_basic} />
                    <TextInput placeholder="Password" placeholderTextColor="#FFF"  style={styles.text_input_basic} />

              </View>
              
          </View>
          <View style={styles.screen_flex_1}>
                <TouchableOpacity activeOpacity={1} onPress={this.gotoLogin.bind(this)} style={styles.btn_green}>
                  <ImageBackground source={btn} style={styles.button_bg}>
                    <Text style={styles.btn_text}>Sign up</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.gotoLogin} style={styles.text_link_wrap}>
                    <Text style={styles.text_link}>I already have an account</Text>
                </TouchableOpacity>
          </View>
        </ImageBackground>
      </RootComponent>
    );
  }
}


export default Register;
