import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList, Alert,
} from 'react-native';
import courseData from "./Course.json";
import examData from "./New.json";
import ExamListItem from './ExamListItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: courseData,
      examData: examData
    };
  }
  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.itemStyle}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../images/home_fzks.png")}
              style={styles.headerImage}
            />
            <Text style={styles.headerTitle}>仿真考试</Text>
            <TouchableOpacity
              onPress={this.history}
              style={[styles.headerButton]}
            >
              <Text style={styles.headerButtonTitle}>练习记录</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <TouchableOpacity
              onPress={() => {
                this.categoryPress("阶段测试");
              }}
              style={styles.categoryItem}
              activeOpacity={0.8}
            >
              <Image source={require("../images/home_jdcs.png")} />
              <Text style={styles.categoryItemTitle}>阶段测试</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.categoryPress("专项训练");
              }}
              style={styles.categoryItem}
              activeOpacity={0.8}
            >
              <Image source={require("../images/home_zxxl.png")} />
              <Text style={styles.categoryItemTitle}>专项训练</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.categoryPress("同步训练");
              }}
              style={styles.categoryItem}
              activeOpacity={0.8}
            >
              <Image source={require("../images/home_tbxl.png")} />
              <Text style={styles.categoryItemTitle}>同步训练</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemStyle}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../images/home_wdkc.png")}
              style={styles.headerImage}
            />
            <Text style={styles.headerTitle}>我的课程</Text>
            <TouchableOpacity
              onPress={this.allCourse}
              style={[styles.headerButton]}
            >
              <Text style={styles.headerButtonTitle}>所有课程</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemStyle}>
            <FlatList
              data={this.state.courseData}
              renderItem={this.renderCourse}
              keyExtractor={this._extraUniqueKey}
            />
          </View>
        </View>
        <View style={styles.itemStyle}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../images/home_zxsj.png")}
              style={styles.headerImage}
            />
            <Text style={styles.headerTitle}>最新资源</Text>
          </View>
          <View style={styles.itemStyle}>
            <FlatList
              data={this.state.examData}
              renderItem={this.renderExam}
              keyExtractor={this._extraUniqueKey}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  renderCourse({ item }) {
    return (
      <View style={styles.courseItem}>
        <Image source={{ uri: item.url }} style={styles.courseImage} />
        <View style={styles.courseItemCenter}>
          <Text style={styles.courseName}>{item.name}</Text>
          <View style={styles.courseSub}>
            <Text style={styles.courseProgress}>已完成{item.progress}%</Text>
            <Text style={styles.courseAvg}> 平均分 {item.avg}分</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.courseBtn} onPress={() => {}}>
          <Text style={styles.courseBtnTitle}>去练习</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderExam({ item }) {
    return (
        <ExamListItem item={item} onPress={()=>{Alert.alert(item.name)}}/>
    );
  }
  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
  history = () => {
    const navigate = this.props.navigation;

  };
  categoryPress = category => {
    const navigate = this.props.navigation;
    navigate.push("ExamList", { categoryName: category });
  };
  allCourse = () => {};
}
const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  itemStyle: {
    backgroundColor: "#ffffff",
    marginTop: 10
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    height: 44,
    alignItems: "center"
  },
  headerImage: {},
  headerTitle: {
    marginLeft: 13,
    flexGrow: 2,
    fontSize: 16,
    fontFamily: "PingFangSC-Medium",
    fontWeight: "500",
    color: "#303943"
  },
  headerButton: {},
  headerButtonTitle: {
    fontSize: 13,
    fontFamily: "PingFangSC-Regular",
    fontWeight: "400",
    color: "#34495E"
  },

  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20
  },
  categoryItem: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center"
  },
  categoryItemTitle: {
    fontSize: 14,
    fontFamily: "PingFangSC-Regular",
    fontWeight: "400",
    color: "#303943",
    marginTop: 13
  },
  courseItem: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  courseImage: {
    width: 41,
    height: 53
  },
  courseItemCenter: {
    flexGrow: 2,
    marginLeft: 8
  },
  courseName: {
    fontSize: 14,
    fontFamily: "PingFangSC-Medium",
    fontWeight: "500",
    color: "rgba(48,57,67,1)"
  },
  courseSub: {
    flexDirection: "row"
  },
  courseProgress: {
    fontSize: 12,
    fontFamily: "PingFangSC-Regular",
    fontWeight: "400",
    color: "rgba(48,57,67,1)"
  },
  courseAvg: {
    fontSize: 12,
    fontFamily: "PingFangSC-Regular",
    fontWeight: "400",
    color: "rgba(48,57,67,1)"
  },
  courseProgressLine: {},
  courseBtn: {
    width: 55,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(253,111,82,1)"
  },
  courseBtnTitle: {
    fontSize: 13,
    fontFamily: "PingFangSC-Regular",
    fontWeight: "400",
    color: "rgba(253,111,82,1)",
    lineHeight: 30,
    textAlign: "center"
  },
});
