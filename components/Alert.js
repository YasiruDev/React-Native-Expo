import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Picker, Text, TextInput, Image,Button } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false 
        };
    }
    componentDidMount() {
      if(this.props.alert){
          this.setState({showAlert:true})
      }
    }
    // componentDidUpdate() {
    //     setTimeout(
    //         (function () {
    //             this.props.clearNotification()
    //         }).bind(this),
    //         5000
    //     );
    // }
     
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };
    render() {
        const {showAlert} = this.state;
        console.log("this.props.notification",this.props)
        console.log("alersts ------------>",this.props.alert)
        // const type = this.props.notification && this.props.notification.type;
        // const { message } = this.props.notification;
        return (
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="AwesomeAlert"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
  }
  
  function mapStateToProps({alert}) {
    return { alert }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Alert);


