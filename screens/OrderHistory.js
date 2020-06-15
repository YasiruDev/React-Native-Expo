import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

import { login } from '../Actions'


class OrderHistory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderList: [
        { id: '#12FR674', time: '2020-06-16 09.23', amount: 1250.00 },
        { id: '#15FK731', time: '2020-06-17 13.46', amount: 13450.00 }
      ]
    };
    this.reOrder = this.reOrder.bind();
    
  }
  reOrder(id) {

  }
  

  renderOrderList() {
    const { orderList } = this.state;
    if (orderList) {
      return orderList.map((order) => {
        return (
          <View key={order.id}>
            <TouchableOpacity            
              onPress={()=> this.props.navigation.navigate('BidsForOrder',{order})}>
              <Text style ={styles.clickable}>Order ID : </Text><Text style ={styles.clickable}>{order.id}</Text>
            </TouchableOpacity>
            
            <Text >Order Time: </Text><Text>{order.time}</Text>
            <Image source={require('./../assets/bill.jpg')} />
            <Text >Total Amount: </Text><Text >RS : {order.amount}</Text>
            <Button onPress={this.reOrder} title='Re-Order' />
          </View>
        )
      })
    }
  }


  render() {
    const { signIn } = this.props;
    console.log("signInsign------->", signIn)

    return (
      <RootComponent>
        <ScrollView style={styles.screen}>
          <BodyBold>Order History</BodyBold>

          {this.renderOrderList()}
        </ScrollView>
      </RootComponent>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  clickable :{
    color: '#20B2AA',
  }
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ }) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
