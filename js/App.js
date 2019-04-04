/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View,
    Image,
    TextInput,
    Alert,
    Button,
} from 'react-native';

import Navigator from './navigator'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

import PageOne from './pageOne'


export default class HelloWorldApp extends Component {

  // 初始化props
  static defaultProps = {
    name:'小王'
  }

  // 初始化state
  constructor(props){
    super(props);
    this.state = {
      type:'类型',
      isShowingText:true,
      text:'null'
    };


    // 每1000毫秒对showText状态做一次取反操作
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return {isShowingText: !previousState.isShowingText};
    //   });
    // },1000);


  }





  render() {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    //根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return  null;
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!</Text>
          <Image source={pic} style={{width:193,height:110}}/>
          <Text style={styles.astyle}>你好！ {this.state.type}</Text>

          <Text>{this.props.text}</Text>

          <View style={styles.aView}>
            <View style={styles.subView}>
              <View style={styles.subTwoView}>

              </View>
            </View>
          </View>

          <TextInput
              style={{width:100,height:40,backgroundColor:'gray'}}
              placeholder='输入框'
              onChangeText={(text) => this.setState({text})}
          />
          <Text style={{width:200,height:30,backgroundColor:'green'}}>{this.state.text}</Text>


          <Button
              onPress={()=>{
                Alert.alert('点击');
              }}
              title={'按钮'}
          />

          <PageOne/>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  astyle: {
    fontSize: 20,
  },
  aView:{
    width: 200,
    height: 100,
    backgroundColor: 'red'
  },
  subView:{
    width:80,
    height:50,
    backgroundColor:'yellow',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingRight:10,
    margin: 10,
  },
  subTwoView:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});
