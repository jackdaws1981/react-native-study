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
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class AlignItemsBasics extends Component {
//   render() {
//     return (
//       // Try setting `alignItems` to 'flex-start'
//       // Try setting `justifyContent` to `flex-end`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//       }}>
//         <View style={{flex: 1,backgroundColor: 'powderblue'}} />
//         <View style={{flex: 1,backgroundColor: 'skyblue'}} />
//         <View style={{flex: 1,backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);


// =============================================== Handling Text Input
// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);



// // =============================================== Handling Touches
// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//         <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);




// =============================================== Handling Touches

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Touchables);


// =============================================== ScrollView
// import React, { Component } from 'react';
// import { AppRegistry, ScrollView, Image, Text } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView horizontal={true} maximumZoomScale={4} minimumZoomScale={3}>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

// // skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//   'AwesomeProject',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);








// =============================================== ListView - FaltList
// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);



// =============================================== ListView - SectionList
// import React, { Component } from 'react';
// import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);





// =============================================== Networking
// import React from 'react';
// import { AppRegistry, FlatList, ActivityIndicator, Text, View  } from 'react-native';

// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FetchExample);




// =============================================== Navigation (구동실패)
// import {
//   StackNavigator,
// } from 'react-navigation';

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }

// class ProfileScreen extends React.Component {
 
//   render() {
//     return (
//       <Text>d;lkjfhdk;lfjh</Text>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => HomeScreen);



// =============================================== NavigatorIOS (구동실패 - 탭영역이 출력이 안됩)
// import React from 'react';
// import PropTypes from 'prop-types';
// import {Button, NavigatorIOS, Text, View} from 'react-native';

// export default class NavigatorIOSApp extends React.Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: MyScene,
//           title: 'My dfkghjdkfgh Scene',
//           passProps: {index: 1},
//         }}
//         style={{flex: 1}}
//       />
//     );
//   }
// }

// class MyScene extends React.Component {
//   static propTypes = {
//     route: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//     }),
//     navigator: PropTypes.object.isRequired,
//   };

//   constructor(props, context) {
//     super(props, context);
//     this._onForward = this._onForward.bind(this);
//   }

//   _onForward() {
//     let nextIndex = ++this.props.index;
//     this.props.navigator.push({
//       component: MyScene,
//       title: 'Scene ' + nextIndex,
//       passProps: {index: nextIndex},
//     });
//   }

//   render() {
//     return (
//       <View style={{marginTop: 300}}>
//         <Text>Current Scene: {this.props.title}</Text>
//         <Button
//           onPress={this._onForward}
//           title="Tap me to load the next scene !!!!"
//         />
//       </View>
//     );
//   }
// }

// =============================================== Animation fade in/out
// import React from 'react';
// import { Animated, Text, View } from 'react-native';

// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//   }

//   componentDidMount() {
//     Animated.timing(                  // Animate over time
//       this.state.fadeAnim,            // The animated value to drive
//       {
//         toValue: 1,                   // Animate to opacity: 1 (opaque)
//         duration: 10000,              // Make it take a while
//       }
//     ).start();                        // Starts the animation
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View                 // Special animatable View
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim,         // Bind opacity to animated value
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }


// =============================================== Animation layout
// import React from 'react';
// import {
//   NativeModules,
//   LayoutAnimation,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
// } from 'react-native';

// const { UIManager } = NativeModules;

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     this.setState({w: this.state.w + 15, h: this.state.h + 15})
//   }

//   render() {
//     return (

//       <View style={styles.container}>
//         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
//         <TouchableOpacity 
//             onPress={this._onPress}
//             accessible={true}
//             accessibilityLabel={'Tap me!'}
//             accessibilityViewIsModal={true}
//         >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });





// =============================================== React lifecycle
import React, { Component } from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    
    return (
      <View>
        <Text>카운터 :</Text>
        <View>
          <Text>값: {this.state.number}</Text>
        </View>
        <Button onPress={this.handleIncrease} title='+'></Button>
        <Button onPress={this.handleDecrease} title='-'></Button>
      </View>
    );
  }

}
