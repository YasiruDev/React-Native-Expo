import React from "react";
import { View, StyleSheet, Picker, Text, TextInput, Alert, Image, Button } from "react-native";
import RootComponent from "../components/RootComponent";
import UploadImage from '../lib/UploadImage';
import BodyBold from "../components/UI/BodyBold";
// import { StreamChat } from "stream-chat";
// import {
//     Chat,
//     Channel,
//     MessageList,
//     MessageInput,
// } from "stream-chat-expo";

// const chatClient = new StreamChat('f8wwud5et5jd');
// const userToken =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2h5LWJhbmQtNSJ9.9KQAcok9S7ZfqWgfmyMarCYIbPMSHdQa-bPNdoRsQbg';

// const user = {
//     id: 'shy-band-5',
//     name: 'Shy band',
//     image:
//         'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
// };

// chatClient.setUser(user, userToken);

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null
        };

    }
    componentDidMount() {
 
    }




    render() {
        // const channel = chatClient.channel("messaging", "wispy-wind-7");
        // channel.watch();
        return (
            <RootComponent>
                {/* <Chat client={chatClient}>
                    <Channel channel={channel}>
                        <View style={{ display: "flex", height: "100%" }}>
                            <MessageList />
                            <MessageInput />
                        </View>
                    </Channel>
                </Chat> */}
            </RootComponent>
        );
    }
}


 
export default Messages;
