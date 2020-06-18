import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import { login, checkAlert } from '../Actions'
import AwesomeAlert from 'react-native-awesome-alerts';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showAlert: false
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this)

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

  login() {
    const { checkAlert } = this.props;
    checkAlert('hii');

  }
  register() {
    this.props.navigation.navigate('Register');
  }
  


  render() {
    const { signIn } = this.props;
    console.log("signInsign------->", signIn)
    // console.log("Paramas ---> ", this.props.navigation.state)
    return (
      <RootComponent>
        <View style={styles.screen}>
          <BodyBold>SignIn Screen</BodyBold>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="E-mail" />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
            placeholder="Password" />

          <Button onPress={this.login} title='Login' />

          <Text>I don't have an account</Text>
          <Button onPress={this.register} title='Register' />
        
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
  return bindActionCreators({ login, checkAlert }, dispatch);
}

function mapStateToProps({ signIn }) {
  return { signIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
