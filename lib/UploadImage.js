import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Dimensions,
    ActivityIndicator,
    Platform,
    Alert,
    Linking,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
// import { ImagePicker } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import uid from 'uuid-v4';
export default class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.askPermission = this.askPermission.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.state = {
            endpoint: this.props.endpoint ? this.props.endpoint : null,
            payloadKey: this.props.payloadKey ? this.props.payloadKey : null,
            token: this.props.token ? this.props.token : null,
            callbackUrl: this.props.callbackUrl ? this.props.callbackUrl : null,
            loading: false
        }
        defaultProps = {
            onSuccess: undefined,
            onFailure: undefined,
            onStartUpload: undefined,
            alertTitle: 'Please Allow Access',
            alertMessage: [
                'This applicaton needs access to your photo library to upload images.',
                '\n\n',
                'Please go to Settings of your device and grant permissions to Photos.',
            ].join(''),
            alertNo: 'Not Now',
            alertYes: 'Settings',
        };
    }
    async askPermission() {
        // only if user allows permission to camera roll
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { onStartUpload } = this.props;
        // On Android users are prompted every time,
        // so no need to show additional Alert
        if (status !== 'granted') {
            if (Platform.OS === 'ios') this.showAlert();
            return;
        }
    }
    showAlert() {
        const { alertMessage, alertTitle, alertYes, alertNo } = this.props;
        Alert.alert(
            'Please Allow Access',
            [
                'This applicaton needs access to your photo library to upload images.',
                '\n\n',
                'Please go to Settings of your device and grant permissions to Photos.',
            ].join(''),
            [
                { text: 'Not Now', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
            ],
        );
    }
    uploadResult = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { onStartUpload } = this.props;
        console.log(status, 'status');
        if (status !== 'granted') {
            if (Platform.OS === 'ios') this.showAlert();
            return;
        }
        ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'Images'
        }).then((result) => {
            console.log(result, 'result');
            const file = result.uri;
            if (!result.cancelled) {
                this.setState({
                    loading: true
                })
               this.setState({uploaded_photo: file,loading: false,});
               // upload image from backend API

                // uploadResponse = this.uploadImageAsync(result.uri).then((reponse) => {
                //     console.log(reponse, 'reponse');
                //     this.setState({
                //         loading: false,
                //         uploaded_photo: file
                //     })
                // });
            }
        })
    }
    takeAphoto = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { onStartUpload } = this.props;
        
        if (status !== 'granted') {
            if (Platform.OS === 'ios') this.showAlert();
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
          });
        
          if (result.cancelled) {
            return;
          }
        
          // ImagePicker saves the taken photo to disk and returns a local URI to it
          let localUri = result.uri;
          let filename = localUri.split('/').pop();
          this.setState({uploaded_photo: localUri,loading: false,});
          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;
        
          // Upload the image using the fetch and FormData APIs
          let formData = new FormData();
          // Assume "photo" is the name of the form field the server expects
          formData.append('photo', { uri: localUri, name: filename, type });
        
          return await fetch(this.state.endpoint, {
            method: 'POST',
            body: formData,
            headers: {
              'content-type': 'multipart/form-data',
            },
          });
    }
    async uploadImageAsync(uri) {
        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        const { headers } = this.props;
        const endpoint = this.state.endpoint; // Define Endpoint Here
        const payloadKey = this.state.payloadKey; // Define PayloadKey here Ex. 'file'
        const method = 'POST';
        const formData = new FormData();
        console.log("End point ---> ",endpoint)
        console.log("fileType--->",fileType)
        formData.append(payloadKey, {
            uri,
            name: uid(),
            type: `image/${fileType}`,
        });

        console.log("formData --->",formData)
        const options = {
            method,
            body: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': this.state.token, // If restricted provide appropriate token here otherwise ignore or remove this line
            },
        };
        return fetch(endpoint, options);
    }
    render() {
        console.log("callbackUrl ---->",this.props.callbackUrl)
        if (this.state.loading) {
            return (
                <View style={[style.container]}>
                    <ActivityIndicator size="large" color="#FF8241" />
                </View>
            )
        }
        return (
            <View style={style.imgwrapper}>
              
                {this.props.callbackUrl != null ?
                    <Image source={{ uri: this.state.uploaded_photo ? this.state.uploaded_photo : this.props.callbackUrl }}
                        style={{ width: 100, height: 100, borderRadius: 5,margin : 10 }} />
                    : <Image source={{ uri: 'https://www.royaleboost.com/template/default-profile-img.png' }} style={{ width: 80, height: 80 }} />}
                {/* <TouchableOpacity
                    style={style.circleWrapper}
                    onPress={() => {
                        this.uploadResult();
                    }}
                >
                   <Text>Upload from mobile</Text>
                </TouchableOpacity> */}

                <Button onPress={this.uploadResult.bind(this)} style={style.button_style} title="Upload from mobile"/>
                <Button onPress={this.takeAphoto.bind(this)} style={style.button_style} title="Take a photo"/>
            </View>
        )
    }
}
const style = StyleSheet.create({
    imgwrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 80,
    },
    circleWrapper: {
        backgroundColor: '#ECECEC',
        height: 22,
        width: 150,
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 11,
        
        // marginLeft: 70,
        // marginTop: -80,
    },
    button_style:{
        margin : 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})