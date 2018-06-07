/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  PushNotificationIOS
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import Tabbar from 'react-native-tabbar-bottom'

class MainScreen extends Component {
  static navigationOptions = {
    title: '아아 페이스북',
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        title="아아 가이드 문서 담당자여"
        onPress={() =>
          this.props.navigation.navigate('Timer')
        }
      />
    );
  }
};

class TimerScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
      for (i = 0; i < digits - n.length; i++) { zero += '0';}
    }
    return zero + n;
  }
  
  getDateText() { var d = new Date(); return this.leadingZeros(d.getHours(),2) + ":" + this.leadingZeros(d.getMinutes(),2) + ":" + this.leadingZeros(d.getSeconds(),2); }
  randomColor() { return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; }
  
  

  constructor(props) {
    super(props)
    
    this.changeBackground = this.changeBackground.bind(this);
    this.isShowPalette = false;
    this.paletteOpacity = new Animated.Value(0);
    // state 랜덤 초기화
    this.state = { 
      timeText : this.getDateText(),
      touchColor : 'cadetblue',
      paletteOpacity : new Animated.Value(0)
    };
    


    // 1초당 타이머 시작 , setState로 rerender
    setInterval(()=>{
      this.setState( previousState => {
        return {timeText : this.getDateText() }
      })
    },1000);
  }

  // 내부 람다 정의
  changeBackground (color) {
    this.setState(previousState => {
      return {
        touchColor : color
      };
    })

    this.togglePalette();
  }

  togglePalette = () => {
    
    var to = (this.isShowPalette == false)? 1 : 0;
    this.isShowPalette = !this.isShowPalette;
    console.log(to);
    Animated.timing(
      this.state.paletteOpacity,{
        toValue : to,
        duration: 300,
        easing : Easing.linear
      }).start(); 
  }

  render() {
    let { paletteOpacity } = this.state;
    return (
      <View style={ [styles.container , {backgroundColor: this.state.touchColor}] }>

        {/* 팔레트 show/hide 버튼 */}
        <View style={ [styles.button , { position:'absolute', top:30 , right:30 , width:30, height:30 }] }>
          <TouchableOpacity  onPress={this.togglePalette}>
            <Image style={{width:30, height:30 }} source={ require("./palette.png") }/>
          </TouchableOpacity>
        </View>

        {/* 팔레트 */}
        <Animated.View style={ [styles.palette , { position:'absolute', top:80 , right:30 , opacity:paletteOpacity } ]  }>
          <TouchableOpacity onPress={()=> {this.changeBackground('cadetblue')} }    style={ [styles.paletteItem, {backgroundColor:'cadetblue'}] } />
          <TouchableOpacity onPress={()=> {this.changeBackground('blueviolet')} }   style={[styles.paletteItem, {backgroundColor:'blueviolet' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('cornflowerblue')} }   style={[styles.paletteItem, {backgroundColor:'cornflowerblue' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('bisque')} }     style={[styles.paletteItem, {backgroundColor:'bisque' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('cornsilk')} }   style={[styles.paletteItem, {backgroundColor:'cornsilk' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('crimson')} }    style={[styles.paletteItem, {backgroundColor:'crimson' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('gainsboro')} }  style={[styles.paletteItem, {backgroundColor:'gainsboro' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('ivory')} }      style={[styles.paletteItem, {backgroundColor:'ivory' }]} />
          <TouchableOpacity onPress={()=> {this.changeBackground('honeydew')} }   style={[styles.paletteItem, {backgroundColor:'gray' }]} />
        </Animated.View>

        {/* 시간 출력 */}
        <Text style={styles.timeText}> {this.state.timeText} </Text>

      </View>
    );
  }
}

export const SimpleAppNavigator = StackNavigator (
  {
    Home: {screen: MainScreen},
    Timer:{screen: TimerScreen}
  }
);


// 공식문서와 가이드가 다릅니다 ,,, 욕이 나옵니다
const AppNavigation = () => (
  <SimpleAppNavigator  />
);

// export default class App extends React.Component {
//   render() {
//     return (
//         <AppNavigation/>
//     );
//   }
// }


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
    }


    var PushNotification = require('react-native-push-notification');

    PushNotification.configure({

      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
          console.log( 'TOKEN:', token );
      },
  
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
  
          // process the notification
  
          // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
          notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
  
      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "YOUR GCM SENDER ID",
  
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
  
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
  
      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
  });

    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (3 * 1000))
    });

    console.log('siodfuyaisdufhalksjdfh');
  }

  render() {
    return (
      <View style={styles.footerContanier}>

        {this.state.page === "HomeScreen" && <Text>Home</Text>}
        {this.state.page === "TimerScreen" && <SimpleAppNavigator/>}
        {this.state.page === "1" && <Text>1</Text>}
        {this.state.page === "2" && <Text>2</Text>}
        {this.state.page === "3" && <Text>3</Text>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              iconText:"home"
            },
            {
              page: "TimerScreen",
              iconText:"Timer"
            },
            {
              page: "1",
              iconText:"1"
            },
            {
              page: "2",
              iconText:"2"
            },
            {
              page: "3",
              iconText:"3"
            },
          ]}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  footerContanier:{
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timeText: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  palette: {
    flex:1,
    flexDirection:'row',
    backgroundColor: 'black',
    padding : 1
  },
  paletteItem: {
    width:30 , 
    height:30 , 
    margin:1
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});