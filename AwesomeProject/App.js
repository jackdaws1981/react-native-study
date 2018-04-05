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
// import React , {Component} from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText:true};

//     setInterval(()=> {
//       this.setState(previousState => {
//         return {isShowingText : !previousState.isShowingText};
//       })
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text> {display} </Text>
//     ) ;
//   };
// }

// export default class BlinkApp extends Component {
//   render() {
//     return(
//       <View>
//         <Blink text='aaaa' />
//         <Blink text='bbbb' />
//         <Blink text='cccc' />
//         <Blink text='dddd' />
//     </View>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject',()=>BlinkApp);



// =============================================== Style
// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);


// =============================================== Height and Width - fixed
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);



// =============================================== Height and Width - flux
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         {/* <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} /> */}
//         <View style={{width:100 , height:10, flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);


// =============================================== Layout with Flexbox - flex direction
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
//        <View style={{flex:1, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{flex:1.5, height: 50,backgroundColor: 'skyblue'}} />
//         <View style={{flex:1, height: 50,backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

// =============================================== Layout with Flexbox - Justify Content
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center'
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);




// =============================================== Layout with Flexbox - Align Item
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex: 1,backgroundColor: 'powderblue'}} />
        <View style={{flex: 1,backgroundColor: 'skyblue'}} />
        <View style={{flex: 1,backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
