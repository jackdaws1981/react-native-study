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
  Button
} from 'react-native';

// 긁어옴, 공백채워주기
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

// 긁어옴, 날짜 포맷 처리
function getDateText() {
  var d = new Date();
  return leadingZeros(d.getHours(),2) + ":" + leadingZeros(d.getMinutes(),2) + ":" + leadingZeros(d.getSeconds(),2);
}

// 긁어옴, 랜덤 색상
function randomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

/*
  visual code에서 아래 에러는 도대체 왜 발생하는것인가.
    [js] 'type aliases'는 .ts 파일에서만 사용할 수 있습니다.
    type Props = {}
*/
type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    
    // state 랜덤 초기화
    this.state = { 
      timeText : getDateText(),
      touchColor : randomColor()
    };
    
    // 1초당 타이머 시작 , setState로 rerender
    setInterval(()=>{
      this.setState( previousState => {
        return {timeText : getDateText() };
      })
    },1000)
  }

  // 내부 람다 정의
  _onPress = () => {
    this.setState(previousState => {
      return {touchColor : randomColor()};
    })
  }

  render() {

    return (
      <View style={ [styles.container , {backgroundColor: this.state.touchColor}] }>
      
        {/* 시간 출력 */}
        <Text style={styles.welcome}> {this.state.timeText} </Text>

        {/* 터치시 백그라운드 색상 랜덤 처리 */}
        <Button onPress={this._onPress} title={"touch"} />
      
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
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
  }
});
