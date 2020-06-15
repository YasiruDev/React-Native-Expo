import React from "react";
import { View, StyleSheet, Picker, Text, TextInput, Alert,Image,Button } from "react-native";
import RootComponent from "../components/RootComponent";
import UploadImage from '../lib/UploadImage';
import BodyBold from "../components/UI/BodyBold";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         url : null
        };
        this.gotoLogin = this.gotoLogin.bind(this)
    }
    componentDidMount(){
        const {params} =this.props.navigation.state;
        console.log("Paramas ---> ",params)
        if(params){
            this.setState({url:params.fileData._parts[0][1].uri})
        }
        else{
           
        }
    }
    gotoLogin() {
        this.props.navigation.navigate('Dashboard');
    };


  
    render() {
        const {url} = this.state;
        console.log("url-------->",url)
        return (
            <RootComponent>
                <View style={styles.screen}>
                    <BodyBold>Checkout</BodyBold>
                    <Text>John Wick</Text>
                    <Text>23/1A ,Main road,Kurunegala.</Text>
                    <Text>Kurunegala</Text>
                    <Text>94712543784</Text>
                    {this.state.url?
                    <Image source={{ uri: this.state.url }} 
                    style={styles.imgwrapper} />:<Text></Text>}                    


                    <Button onPress={this.gotoLogin} title='Submit' />

                </View>
            </RootComponent>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    imgwrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 40,
        width: 200, 
        height: 200
    },
});

export default Checkout;
