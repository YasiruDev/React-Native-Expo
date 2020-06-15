import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

class BidsForOrder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order:'',
      orderList: [
        { name: 'Harper Constructions', amount: 1345.00 },
        { name: 'Oliver Constructions', amount: 1456.00 },
        { name: 'John Dear Constructions & suppliers', amount: 1290.00 }
      ]
    };
    
  }
  
  componentDidMount(){
    const {params} =this.props.navigation.state;
    console.log("Paramas ---> ",params)
    if(params){
        this.setState({order:params.order})
    }
    
}

  renderOfferList() {
    const { orderList } = this.state;
    if (orderList) {
      return orderList.map((order,i) => {
        return (
          <View key={i}>          
            
            <Text>{order.name}</Text>
            <Text >RS : {order.amount}</Text>
            <Button onPress={this.reOrder} title='Get this offer' />
          </View>
        )
      })
    }
  }


  render() {
    console.log("order ---->",this.state.order)
    return (
      <RootComponent>
        <ScrollView style={styles.screen}>
          <BodyBold>Bids for order {this.state.order?this.state.order.id:''}</BodyBold>

          {this.renderOfferList()}
        </ScrollView>
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
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ }) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BidsForOrder);
