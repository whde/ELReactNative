import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
export default class ExamListItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.examItem} onPress={this.props.onPress} activeOpacity={0.9}>
                <LinearGradient start={{x:0,y:0}} end={{x:0,y:1}} colors={['#FFCF00','#FFA200']} style={styles.examItemLeft}/>
                <Text style={styles.examItemTitle}>{this.props.item.name}</Text>
                {
                    this.props.item.done ? (
                        <View style={styles.examItemRight}>
                            <Text style={styles.examItemScore}>{this.props.item.score}</Text>
                            <Text style={styles.examItemMsg}>最高成绩</Text>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.courseBtn}>
                            <Text style={styles.courseBtnTitle}>去练习</Text>
                        </TouchableOpacity>
                    )
                }
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
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
    examItem: {
        flexDirection: "row",
        height: 55,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        marginHorizontal: 25,
        marginVertical: 5,
        alignItems: "center"
    },
    examItemLeft: {
        width: 3,
        height: 55,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4
    },
    examItemTitle: {
        fontSize: 15,
        fontFamily: "PingFangSC-Regular",
        fontWeight: "400",
        color: "rgba(76,76,76,1)",
        marginLeft: 13,
        flexGrow: 2
    },
    examItemRight: {
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center"
    },
    examItemScore: {
        fontSize: 17,
        fontFamily: "PingFangSC-Medium",
        fontWeight: "500",
        color: "rgba(253,111,82,1)"
    },
    examItemMsg: {
        fontSize: 10,
        fontFamily: "PingFangSC-Regular",
        fontWeight: "400",
        color: "rgba(194,194,194,1)"
    },
});
