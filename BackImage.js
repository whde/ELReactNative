import React from 'react';
import {Image} from 'react-native';

export default class BackImage extends React.Component { //创建一个返回按钮的组件
    render() {
        return (
            <Image
                source={require('./images/fanhui.png')}
                style={{width: 44, height: 15, resizeMode:'center'}}
            />
        );
    }
}
