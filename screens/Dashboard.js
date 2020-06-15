import React from "react";
import { View, StyleSheet,Text, Button } from "react-native";

import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList : [{id:1,title : 'abc vender has bid'},{id:2,title : 'xxx vender has bid'}]
    };
    this.history = this.history.bind(this);
    this.myAccount = this.myAccount.bind(this);
    this.newOrder = this.newOrder.bind(this)
}
  history() {
    this.props.navigation.navigate('OrderHistory');
  };
  myAccount() {
   this.props.navigation.navigate("Profile");
  };
  newOrder() {
    this.props.navigation.navigate('MakeOrder');
  };


  renderOrderList() {
    const { orderList }= this.state;
    if (orderList) {
            return orderList.map((order) => {
                return <Text key={order.id}>{order.title}</Text>
            })
        
    }
}

  render() {
   
    return (
      <RootComponent>
        <View style={styles.screen}>
          <BodyBold>Dashboard</BodyBold>

          <Text>John Doe</Text>
          <Text>abc@aaa.com</Text>

            {this.renderOrderList()}

          <Button onPress={this.history.bind(this)} title='Order History' />
          <Button onPress={this.myAccount.bind(this)} title='My account' />
          <Button onPress={this.newOrder.bind(this)} title='Make an Order' />
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

export default Dashboard;
