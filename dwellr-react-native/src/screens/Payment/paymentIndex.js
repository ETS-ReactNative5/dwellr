import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { WebView } from "react-native-webview";
import Amplify, { API, graphqlOperation, Analytics } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "../../aws-exports";
import CustomButton from '../../Components/Button/buttonIndex'
import styles from './paymentStyles';

Amplify.configure(config);
Analytics.disable();

class Payment extends React.Component {
  state = {
    amount: 1000,
    screen: "product",
    initUrl: "https://d3lwkxs11zm75x.cloudfront.net/",
    url: "https://d3lwkxs11zm75x.cloudfront.net/payment-init",
    loading: true
  };

  async createPaymentSession() {
    // hardcode input values, make these dynamic with the values from the logged in user
    const input = {
      amount: this.state.amount,
      name: "",
      email: ""
    };

    await API.graphql(
      graphqlOperation(mutations.createPayment, { input: input })
    )
      .then(result => {
        const sessionID = JSON.parse(result.data.createPayment.body);
        this.setState({
          url: this.state.initUrl + "payment?session=" + sessionID.id,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  handleOrder() {
    this.setState({ screen: "payment" });
  }

  _onNavigationStateChange(webViewState) {
    if (webViewState.url === this.state.initUrl + "payment-init") {
      this.createPaymentSession();
    }

    if (webViewState.url === this.state.initUrl + "payment-success/") {
      this.setState({ screen: "success" });
    }

    if (webViewState.url === this.state.initUrl + "payment-failure/") {
      this.setState({ screen: "failure" });
    }
  }

  startPayment() {
    const loader = this.state.loading;
    let url = this.state.url;
    if (url === "") {
      url = this.state.initUrl;
    }

    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
          {loader && (
            <View style={[styles.loader, styles.horizontal]}>
              <ActivityIndicator
                animating={true}
                size="large"
                color="#47c9ba"
              />
            </View>
          )}
          <View
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              height: 70,
              width: Dimensions.get("window").width,
              zIndex: 200
            }}
          />
          <WebView
            mixedContentMode="never"
            source={{
              uri: url
            }}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          />
        </View>
      </View>
    );
  }

  showProduct() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.text1}>
          Your total is
        </Text>
        <Text style={styles.amount}>
          ${this.state.amount}
        </Text>
        <Text style={styles.text}>
          for this month.
        </Text>
        
        <CustomButton  onPress= {() => this.handleOrder()} title='Pay Now'/>
        

      </View>
    );
  }

  render() {
    switch (this.state.screen) {
      case "product":
        return this.showProduct();
      case "payment":
        return this.startPayment();
      case "success":
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Payment Succeeded :)</Text>
          </View>
        );
      case "failure":
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Payment failed :(</Text>
          </View>
        );
      default:
        break;
    }
  }
}

export default withAuthenticator(Payment);


