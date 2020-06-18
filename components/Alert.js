import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';


class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      message: '',
      type: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.alert) {
      this.setState({
        showAlert: true,
        message: nextProps.alert.message,
        type: nextProps.alert.type
      })
    }
  }
  componentDidUpdate() {
    setTimeout(
      (function () {
        this.hideAlert()
      }).bind(this),
      4000
    );
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };


  render() {
    const { showAlert, message, type } = this.state;
    return (
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={type}
          message={message}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"

          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ alert }) {
  return { alert }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alert);


