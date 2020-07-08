import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, Button, Image, TouchableOpacity, ImageBackground } from "react-native";
import bg_image from './../assets/images/dashboard_bg.png'
import history from './../assets/history.png'
import styles from './../Styles/styles';
import avatar from './../assets/avatar.png'
import profile from './../assets/images/profile.png'
import orderHistory from './../assets/images/history.png'
import new_order from './../assets/images/new_order.png'
import message from './../assets/images/message.png'
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";
import { AsyncStorage } from "react-native";
import {getOrderList} from "../Actions";
import { from } from "seamless-immutable";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [{ id: 1, title: 'abc vender has bid' }, { id: 2, title: 'xxx vender has bid' }]
    };
    this.history = this.history.bind(this);
    this.myAccount = this.myAccount.bind(this);
    this.newOrder = this.newOrder.bind(this)
  }
  history() {
    console.log("history")
    this.props.navigation.navigate('OrderHistory');
  };
  myAccount() {
    this.props.navigation.navigate("Profile");
  };
  newOrder() {
    this.props.navigation.navigate('MakeOrder');
  };
  Chat() {
    this.props.navigation.navigate('Messages');
  };

  componentDidMount(){
    this.props.getOrderList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orderList) {
      console.log("orderList -->",nextProps.orderList) 
    }
    

  }

  renderOrderList() {
    const { orderList } = this.state;
    if (orderList) {
      return orderList.map((order) => {
        return <Text style={styles.order_history_text} key={order.id}>{order.title}</Text>
      })

    }
  }

  render() {
    return (
      <RootComponent>

        {/* <ImageBackground source={bg_image} style={styles.main_bg}>
          
            <View style={styles.screen_flex_1}>
              <Text style={styles.white_header_text}>Dashboard</Text>
              <Image source={avatar} style={styles.profilePicture} />
              <Text style={styles.basic_text}>John Doe</Text>
              <Text style={styles.basic_text}>abc@aaa.com</Text>
            </View>

          
          <View style={{flex:1,padding:10}}>
            <Text style={{fontWeight:"bold",fontSize: 17,}}>Recent Notifications</Text>
            {this.renderOrderList()}
          </View>
          <View style={styles.screen_flex_1}>
            <Button onPress={this.history.bind(this)} title='Order History' />
            <Button onPress={this.myAccount.bind(this)} title='My account' />
            <Button onPress={this.newOrder.bind(this)} title='Make an Order' />
          </View>
        </ImageBackground> */}
        <ImageBackground source={bg_image} style={styles.container}>
          <View style={styles.align_center}>
            <Text style={styles.white_header_text}>Dashboard</Text>
            <Image source={avatar} style={styles.profilePicture} />
            <Text style={styles.basic_text}>John Doe</Text>
          </View>

          <View style={{ padding: "10%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17, }}>Recent Notifications</Text>
            {this.renderOrderList()}
          </View>
          <View style={{
            padding: "5%",
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{ paddingLeft: 40,paddingTop:30}}>
              <TouchableOpacity activeOpacity={1} onPress={this.history.bind(this)} >
                {/* <Button onPress={this.history.bind(this)}  title='Order History' /> */}
                <ImageBackground source={orderHistory} style={{ width: 45, height: 45 }} />

                <Text style={{ padding: 5}}>Order History</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={this.myAccount.bind(this)} >
                <ImageBackground source={profile} style={{ width: 45, height: 45 }} />
                <Text style={{ marginTop: 5 }}>My account</Text>
                {/* <Button onPress={this.myAccount.bind(this)} title='My account' /> */}
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 40,paddingTop:30}}>
              <TouchableOpacity activeOpacity={1} onPress={this.newOrder.bind(this)} >
                <ImageBackground source={new_order} style={{ width: 45, height: 45 }} />
                <Text style={{ marginTop: 5 }}>Make an Order</Text>
                {/* <Button onPress={this.newOrder.bind(this)} title='Make an Order' /> */}
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={this.newOrder.bind(this)} >
                <ImageBackground source={orderHistory} style={{ width: 45, height: 45 }} />
                <Text style={{ marginTop: 5 }}>Chat</Text>
                {/* <Button onPress={this.Chat.bind(this)} title='Chat' /> */}
              </TouchableOpacity>
            </View>

          </View>
          {/* <Form
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
          </Form> */}
        </ImageBackground>
      </RootComponent>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOrderList }, dispatch);
}

function mapStateToProps({orderList}) {
  return {orderList}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

