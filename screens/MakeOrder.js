import React from "react";
import { View, StyleSheet, Picker, Text, TextInput, Button } from "react-native";
import RootComponent from "../components/RootComponent";
import UploadImage from '../lib/UploadImage';
import BodyBold from "../components/UI/BodyBold";

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
            tokenName:""
        };
        this.gotoLogin = this.gotoLogin.bind(this)
    }
    gotoLogin() {
        this.props.navigation.navigate('Login');
    };

    dropDOwnList() {
        return this.state.CATEGORY_LIST.map((category, i) => {
            return <Picker.Item key={i} label={category.label} value={category.value} />
        })
    }
    setSelectedValue(value) {
        console.log("selectedValue ", value)
        this.setState({ selectedValue: value })
    }
    FetchedProfileImage(){

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
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
                        placeholder="Password" />

                    <UploadImage
                        payloadKey='file' // Field name
                        endpoint='http://localhost:3002/api/protected/customer/upload' // url is fake replace with your own
                        callbackUrl={this.FetchedProfileImage.bind(this)} // CallBack Image url
                        token={this.state.tokenName} // Api Token if no restriction ignore it
                    />
                    
                    <Text>I already have an account</Text>
                    <Button onPress={this.gotoLogin} title='Login' />

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

export default MakeOrder;
