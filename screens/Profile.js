import React from "react";
import { View, StyleSheet, Text,Image, Button } from "react-native";
import Dialog from "react-native-dialog";
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import { AsyncStorage } from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisibleAccount: false,
      dialogVisibleShipping:false,
      orderList: [{ id: 1, title: 'abc vender has bid' }, { id: 2, title: 'xxx vender has bid' }]
    };
    this.signOut = this.signOut.bind(this)
    this.orders = this.orders.bind(this)
    this.settings = this.settings.bind(this)
    this.shipping = this.shipping.bind(this)
  }

  signOut() {
    AsyncStorage.clear();
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() =>this.props.navigation.navigate('Login'));
    
  }
  orders() {
    this.props.navigation.navigate('OrderHistory');
  }
  showDialog = () => {
    this.setState({ dialogVisibleAccount: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisibleAccount: false });
  };
  handleEdit = () => {
    this.setState({ dialogVisibleAccount: false });
  };

  showDialogShipping = () => {
    this.setState({ dialogVisibleShipping: true });
  };
 
  handleCancelShipping = () => {
    this.setState({ dialogVisibleShipping: false });
  };
  handleEditShipping = () => {
    this.setState({ dialogVisibleShipping: false });
  };

  settings() {
    
  }
  shipping() {

  }
  popupAccountSettings(){
    return(
      <Dialog.Container visible={this.state.dialogVisibleAccount}>
          <Dialog.Title>Update Account</Dialog.Title>
          <Dialog.Input placeholder="Name"/>
          <Dialog.Input placeholder="E-mail"/>
          <Dialog.Input placeholder="Mobile"/>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Edit" onPress={this.handleEdit} />
        </Dialog.Container>
    )
  }
  popupShippingAddress(){
    return(
      <Dialog.Container visible={this.state.dialogVisibleShipping}>
          <Dialog.Title>Update Address</Dialog.Title>
          <Dialog.Input placeholder="23/1A ,Main road,Kurunegala"/>
          <Dialog.Input placeholder="Kurunegala"/>
          <Dialog.Button label="Cancel" onPress={this.handleCancelShipping} />
          <Dialog.Button label="Edit" onPress={this.handleEditShipping} />
        </Dialog.Container>
    )
  }
  render() {

    return (
      <RootComponent>
        <View style={styles.screen}>
          <BodyBold>My profile</BodyBold>
          {this.popupAccountSettings()}
          {this.popupShippingAddress()}
          <Image source={require('./../assets/avatar.png')} />

          <Button onPress={this.orders.bind(this)} title='Orders' />
          <Button onPress={this.showDialog.bind(this)} title='Account Settings' />
          <Button onPress={this.showDialogShipping.bind(this)} title='Shipping Address' />
          <Button onPress={this.signOut.bind(this)} title='SignOut' />
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

export default Profile;
