import React, { Component } from 'react'
import MineScreen from './Mine/Mine'
import WorkScreen from './Work/Work'
import MistakesScreen from './Mistakes/Mistakes'
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home/Home';
import ExamListScreen from './Home/ExamList';
import {Image, StyleSheet} from 'react-native';
const HomeRootStack = createStackNavigator({
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                title:'首页',
                headerStyle:{
                    backgroundColor:'#FFFFFF',
                },
                headerBackTitle:null,
                headerTintColor: '#000',
            }
        },
        ExamList:{
            screen:ExamListScreen,
        }
    },
);

HomeRootStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const WorkRootStack = createStackNavigator({
        Work:{
            screen:WorkScreen,
            navigationOptions:{
                title:'作业',
                headerStyle:{
                    backgroundColor:'#FFFFFF',
                },
            }
        },
    },
);
const MistakesRootStack = createStackNavigator({
        Mistakes:{
            screen:MistakesScreen,
            navigationOptions:{
                title:'错题本',
                headerStyle:{
                    backgroundColor:'#FFFFFF',
                },
            }
        },
    },
);
const MineRootStack = createStackNavigator({
        Mine:{
            screen:MineScreen,
            navigationOptions:{
                title:'我的',
                headerStyle:{
                    backgroundColor:'#FFFFFF',
                },
            }
        },
    },
);


const RootStack = createBottomTabNavigator({
    Home:{
        screen:HomeRootStack,
        navigationOptions: ({ navigation }) => ({
            title: '首页',
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Home') {
                    if (focused) {
                        return <Image source={require('./images/tab_icon_text.png')} style={styles.tabIcon}/>;
                    } else {
                        return <Image source={require('./images/tab_icon_text_disabled.png')} style={styles.tabIcon}/>;
                    }
                }
            }
        })
    },
    Work:{
        screen:WorkRootStack,
        navigationOptions: ({ navigation }) => ({
            title:'作业',
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                if(routeName === 'Work') {
                    if(focused){
                        return <Image source={ require('./images/tab_icon_practice.png')} style={styles.tabIcon}/>;
                    } else {
                        return <Image source={ require('./images/tab_icon_practice_disabled.png')} style={styles.tabIcon}/>;
                    }

                }
            }
        })
    },
    Mistakes:{
        screen:MistakesRootStack,
        navigationOptions: ({ navigation }) => ({
            title:'错题本',
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                if(routeName === 'Mistakes'){
                    if(focused){
                        return <Image source={ require('./images/tab_icon_work.png')} style={styles.tabIcon}/>;
                    } else{
                        return <Image source={ require('./images/tab_icon_work_disabled.png')} style={styles.tabIcon}/>;
                    }

                }
            }
        })
    },
    Mine:{
        screen:MineRootStack,
        navigationOptions: ({ navigation }) => ({
            title:'我的',
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Mine') {
                    if(focused){
                        return <Image source={ require('./images/tab_icon_me.png')} style={styles.tabIcon}/>;
                    } else {
                        return <Image source={ require('./images/tab_icon_me_disabled.png')} style={styles.tabIcon} />;
                    }
                }
            }
        })
    }
},{
    initialRouteName: "Home",
    lazy: true,
    tabBarOptions: {
        activeTintColor: "#ED5601",
        labelStyle: {
            fontSize: 11
        },
        showLabel:true,
        showIcon:true,
    },
});

export default class Tab extends Component {
    render() {
        const RootTab = createAppContainer(RootStack);
        return <RootTab/>
    }
  }
const styles = StyleSheet.create({
    tabIcon:{
        // width:20,
        // height:20,
    }
});
