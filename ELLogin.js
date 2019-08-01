/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import Tab from "./Tab";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Whde001',
      password: '123456',
      loginButtonEnabled: true,
      loginSuccess:false
    };
  }
  componentDidMount() {
    this.onLoginButtonPress()
  }

  render() {
    if (this.state.loginSuccess==true) {
      return (
        <Tab></Tab>
      );
    } else {
      return (
          <View>
            <View style={styles.viewStyle}>
              <Image
                  source={require("./images/logo01.png")}
                  style={styles.logoStyle}
              />
              <View style={styles.inputItemStyle}>
                <Image
                    source={require("./images/denglu01.png")}
                    style={styles.textInputImageStyle}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="请输入账号"
                    onChangeText={this.onChangeUserNameText}
                    value={this.state.userName}
                />
              </View>
              <View style={styles.inputItemStyle}>
                <Image
                    source={require("./images/mima01.png")}
                    style={styles.textInputImageStyle}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="请输入密码"
                    onChangeText={this.onChangePasswordText}
                    value={this.state.password}
                />
              </View>
              <TouchableOpacity
                  activeOpacity={this.state.loginButtonEnabled ? 0.5 : 1}
                  onPress={
                    this.state.loginButtonEnabled ? this.onLoginButtonPress : null
                  }
                  style={[
                    styles.loginButtonStyle,
                    this.state.loginButtonEnabled
                        ? {backgroundColor: '#FE5721'}
                        : {backgroundColor: '#888888'},
                  ]}
              >
                <Text style={styles.loginButtonTitleStyle}>登录</Text>
              </TouchableOpacity>
            </View>
          </View>
      );
    }
  }
  onChangeUserNameText = text => {
    this.setState({
      userName: text
    });
    this.checkLoginButtonEnabled(text, this.state.password);
  };
  onChangePasswordText = text => {
    this.setState({
      password: text
    });
    this.checkLoginButtonEnabled(this.state.userName, text);
  };
  checkLoginButtonEnabled = (name, password) => {
    if (name.length >= 6 && password.length >= 6) {
      this.setState({
        loginButtonEnabled: true
      });
    } else {
      this.setState({
        loginButtonEnabled: false
      });
    }
  };
  onLoginButtonPress = () => {
    if (this.state.userName === "Whde001" && this.state.password === "123456") {
      this.setState({
        loginSuccess : true
      });
    } else {
      Alert.alert('提示', '账号或密码错误');
    }
  };
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex"
  },
  logoStyle: {
    marginTop: 83,
    width: 375,
    height: 200,
    resizeMode: "contain",
    alignItems: "center",
    marginBottom: 40
  },
  inputItemStyle: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: "#888888",
    marginTop: 10
  },
  textInputImageStyle: {
    width: 20,
    height: 44,
    resizeMode: "center",
    marginRight: 8
  },
  textInputStyle: {
    height: 44,
    width: 250,
  },
  loginButtonStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 4,
    height: 44
  },
  loginButtonTitleStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: "center",
    height: 44,
    lineHeight: 44
  }
});
