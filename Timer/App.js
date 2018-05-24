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
  Image
} from 'react-native';




type Props = {};
export default class App extends Component<Props> {

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

    // state 랜덤 초기화
    this.state = { 
      timeText : this.getDateText(),
      touchColor : 'cadetblue',
      isShowPalette : false
    };
    
    // 1초당 타이머 시작 , setState로 rerender
    setInterval(()=>{
      this.setState( previousState => {
        return {timeText : this.getDateText() };
      })
    },1000)
  }

  // 내부 람다 정의
  changeBackground (color) {
    this.setState(previousState => {
      return {
        touchColor : color,
        isShowPalette : !this.state.isShowPalette
      };
    })
  }

  togglePalette = () => {
    this.setState(previousState => {
      return { isShowPalette : !this.state.isShowPalette};
    })
  }

  render() {

    return (
      <View style={ [styles.container , {backgroundColor: this.state.touchColor}] }>

        {/* 팔레트 show/hide 버튼 */}
        <View style={ [styles.button , { position:'absolute', top:30 , right:30 , width:30, height:30 }] }>
          <TouchableOpacity  onPress={this.togglePalette}>
            <Image style={{width:30, height:30 }} source={ require("./palette.png") }/>
          </TouchableOpacity>
        </View>

        {/* 팔레트 */}
        { this.state.isShowPalette &&         
          <View style={ [styles.palette , { position:'absolute', top:80 , right:30 } ]  }>
            <TouchableOpacity onPress={()=> {this.changeBackground('cadetblue')} }    style={ [styles.paletteItem, {backgroundColor:'cadetblue'}] } />
            <TouchableOpacity onPress={()=> {this.changeBackground('blueviolet')} }   style={[styles.paletteItem, {backgroundColor:'blueviolet' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('cornflowerblue')} }   style={[styles.paletteItem, {backgroundColor:'cornflowerblue' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('bisque')} }     style={[styles.paletteItem, {backgroundColor:'bisque' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('cornsilk')} }   style={[styles.paletteItem, {backgroundColor:'cornsilk' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('crimson')} }    style={[styles.paletteItem, {backgroundColor:'crimson' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('gainsboro')} }  style={[styles.paletteItem, {backgroundColor:'gainsboro' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('ivory')} }      style={[styles.paletteItem, {backgroundColor:'ivory' }]} />
            <TouchableOpacity onPress={()=> {this.changeBackground('honeydew')} }   style={[styles.paletteItem, {backgroundColor:'gray' }]} />
          </View>
        }

        {/* 시간 출력 */}
        <Text style={styles.timeText}> {this.state.timeText} </Text>

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
