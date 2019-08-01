import React, { Component } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, Alert } from "react-native";
import examData from "./ExamList.json";
import ExamListItem from "./ExamListItem";
import BackImage from "../BackImage";
export default class ExamList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("categoryName"),
      headerTintColor: "#fff",
      headerBackImage: <BackImage />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      examData: examData
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <FlatList
          data={this.state.examData}
          renderItem={this.renderItem}
          keyExtractor={this._extraUniqueKey}
        />
      </SafeAreaView>
    );
  }
  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
  renderItem({ item }) {
    return (
      <ExamListItem
        item={item}
        onPress={() => {
          Alert.alert(item.name);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {}
});
