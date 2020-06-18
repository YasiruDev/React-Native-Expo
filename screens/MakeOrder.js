import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Picker, Text, TextInput, Button } from "react-native";
import RootComponent from "../components/RootComponent";
import UploadImage from '../lib/UploadImage';
import BodyBold from "../components/UI/BodyBold";
import {checkAlert} from "./../Actions"
class MakeOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CATEGORY_LIST: [
                {
                    label: 'Select...', value: null
                },
                {
                    label: 'Hardware & Construction', value: 9
                },
                {
                    label: 'Roofing and Ceiling', value: 5
                }
            ],
            selectedValue: null,
            tokenName:"",
            fileData : null
        };
        this.gotoLogin = this.gotoLogin.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.upoadedImg !== nextProps.upoadedImg){
            this.setState({fileData:nextProps.upoadedImg})
        }
        
    }

    gotoLogin() {
        // this.props.checkAlert();
        if(this.state.fileData){
            this.props.navigation.navigate('Checkout',{fileData:this.state.fileData});
        }
        else{
            //please uplod image
        }
       
    };

    dropDOwnList() {
        return this.state.CATEGORY_LIST.map((category, i) => {
            return <Picker.Item key={i} label={category.label} value={category.value} />
        })
    }
    setSelectedValue(value) {
        this.setState({ selectedValue: value })
    }
    FetchedProfileImage(values){
        console.log("---uploaded-->",values)
    }
    render() {

        return (
            <RootComponent>
                <View style={styles.screen}>
                    <BodyBold>Make an Order aa</BodyBold>
                    <Picker
                        selectedValue={this.state.selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={this.setSelectedValue.bind(this)}
                    >
                        {this.dropDOwnList()}
                    </Picker>
                   
                    <UploadImage
                        payloadKey='file' // Field name
                        endpoint='http://localhost:3002/api/protected/customer/upload' // url is fake replace with your own
                        callbackUrl={this.FetchedProfileImage.bind(this)} // CallBack Image url
                        token={this.state.tokenName} // Api Token if no restriction ignore it
                    />
                    
                    
                    <Button onPress={this.gotoLogin}  title='Submit' />

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
    return bindActionCreators({checkAlert  }, dispatch);
  }
  
  function mapStateToProps({upoadedImg}) {
    return { upoadedImg }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MakeOrder);

