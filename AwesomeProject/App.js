// =============================================== HelloWorld

// import React, {Component} from 'react';
// import { Text } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello World</Text>
//     )
//   }
// }

// =============================================== Prop - 1
// import React, {Component} from 'react';
// import { AppRegistry, Image } from 'react-native';

// export default class Bananas extends Component {

//   render() {
//     let pic = {
//       uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image source={pic} style={{width:193, height:110}} />
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',()=>Bananas);


// =============================================== Prop - 2 
// import React , {Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello {this.props.a}</Text>
//         <Text>Hello {this.props.a}</Text>      
//       </View>
//     ) ;
//   }
// }
// export default class LotsOfGreetings extends Component {
//   render() {
//     return(
//       <View style={{alignItems:'center'}}>
//         <Greeting a='Rexxar'/>
//         <Greeting a='Jaina'/>
//         <Greeting a='Veleera'/>
//       </View>
//     );
//   } 
// }

// AppRegistry.registerComponent('AwesomeProject',()=>LotsOfGreetings);


// =============================================== State - 2 
import React , {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText:true};

    setInterval(()=> {
      this.setState(previousState => {
        return {isShowingText : !previousState.isShowingText};
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text> {display} </Text>
    ) ;
  };
}

export default class BlinkApp extends Component {
  render() {
    return(
      <View>
        <Blink text='aaaa' />
        <Blink text='bbbb' />
        <Blink text='cccc' />
        <Blink text='dddd' />
    </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject',()=>BlinkApp);