# study-react-native

## Components and APIs
- [이곳](http://www.awesome-react-native.com/) 이나 [저곳](https://www.npmjs.com/search?q=react-native&page=1&ranking=optimal)에서 기본제공 컴포넌트 외 제공하는 라이브러리를 찾아서 써봅시다 

## Platform Specific Code
- 기본적으로 Platform이라는 모듈을 제공하여 플랫폼에 국한된 로직을 처리할 필요가 없이 기본적인 실행중인 플랫폼에 대한 정보를 조회할수가 있다
- Platform 모듈을 사용하여 reactive-native내에서 현재 동작중인 플랫폼에 맞는 OS 분기처리가 가능하다
- Platform 모듈을 사용하여 현재 OS의 version을 조회할수가 있다
- Platform.select를 사용하여 실행중인 플랫품에 맞는 구분을 처리할수가 있다
<br><br>
- 특정 컴포넌트 파일 확장자 뒤에 플랫폼 정보를 명시하면 자동으로 분기로직을 처리할수가 있다
```
BigButton.ios.js
BigButton.android.js

const BigButton = require('./BigButton');
```
## Navigating Between Screens

- 네비게이션 전환을 각각 네이티브에 맞게 보여주고 싶다면 native-navigation, react-native-navigation 라이브러리를 사용하도록 하라 !!!

- **`예제코드 구동 실패 !!!`**

## Images

- Image 객체 source에 경로를 설정하여 require를 통해 객체를 로드할수가 있다
```
<Image source={require('./my-icon.png')} />
<Image source={require('./img/check.png')} />

.
├── button.js
└── img
    ├── check@2x.png
    └── check@3x.png
```
- 실제 사용되는 이미지만 앱에 패키징된다
- 리소스의 변경에 대해서는 앱을 다시 컴파일 할필요가 없다
- 이미지는 npm패키지를 통해 배포할수있다

- native에 번들된 asset에 접근하는경우 다음과 같이 접근가능 하다
    - 안정성검사를 제공하지 않기 때문에 개발자에게 책임이 있다. 잘사용합시다₩
```
iOS
<Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />

android
<Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />

```

- Image객체의 source로 네트워크에서 조회할수가 있다
- iOS의 경우 로컬캐시에 있는 경우 사용이 가능하다
- Image 객체의 source는 일반적인 문자열이 아니라 메타데이터의 추가정보를 위해 객체를 통한다

- 이미지출력위에 하위태그를 추가하려면 ImageBackgroud 컴포넌트를 사용할수 있다
- 이미지디코딩은 메인스레드에서 이루어지지 않는다

## Animations

- 기본적으로 View, Text, Image, ScrollView에 애니메이션을 지정할수 있지만  `Animated.createAnimatedComponent()` 를 사용하여 컴포넌트를 커스텀할수 있다
- Animtated.timing() 메서드에서 속성정의를 할수가 있다
- 여러 애니메이션을 결합하여 새로운 애니메이션을 정의할수가 있다
- interpolate는 여러 영역 세그먼트를 지정하여 애니메이션의 흐름을 지정가능
- 특정애니메이션에서 다른애니메이션의 값을 참조할수 있다
- useNativeDriver 속성으로 바로 native에서 구동되도록 지정가능
    - 아직은 특정 플랫폼에서만 가능한 부분도 있다
- LayoutAnimation을 이용하여 직접적인 측정이나 계산이 필요없이 레이아웃에 대한 애니메이션을 지정할수가 있다
    -  특정 레이아웃의 값을 애니메이션 처리하면 연관 있는 다른 컴포넌트에도 자동으로 적용되는듯함


## Accessibility

- 단순히 UI의 출력에 대한 부분뿐만 아니라, accessible 관련 옵션을 사용하여 장애인을 위한 VoiceOver, TalkBack같은 기능들도 지원해준다.
- 딱히 사용할 일은 별로 없을 듯하다

### properties
```
accessible (iOS, Android)
accessibilityLabel (iOS, Android)
accessibilityTraits (iOS)
accessibilityViewIsModal (iOS)
accessibilityElementsHidden (iOS)
onAccessibilityTap (iOS)
onMagicTap (iOS)
accessibilityComponentType (Android)
accessibilityLiveRegion (Android)
importantForAccessibility (Android)
```



## React LifeCycle 순서

- 컴포넌트 생성
    - constructor
    - componentWillMount
    - componentDidMount
- 컴포넌트 업데이트
    - componentWillReceiveProps
    - [NEW] static getDerivedStateFromProps()
    - shouldComponentUpdate
    - componentWillUpdate
    - [NEW] getSnapshotBeforeUpdate()
    - componentDidUpdate
- 컴포넌트 제거
    - componentWillUnmount



# Improving User Experience
일반적인 설정이 가능하다

### Configure text inputs
- 자동포커스 설정
- placeholder 설정 , format 설정
- 키보드타입 설정
- 키보드 커스텀

### Manage layout when keyboard is visible
- 키보드 출력시 레이아웃 관리

### Make tappable areas larger
- hitSlop prop를 이용한 터치 영역 크기 설정

### Use Android Ripple
- 안드로이드의 경우 API 21부터 지원하는 리플디자인 사용

### Screen orientation lock


# Timers

- 브라우져 타이머를 구현하고 있다
    - setTimeout, clearTimeout
    - setInterval, clearInterval
    - setImmediate, clearImmediate
    - requestAnimationFrame, cancelAnimationFrame

`requestAnimationFrame는 단말마다 다를수가 있다. (iPhone5S의 경우 초당 1000이상이 호출된다 )`

### InteractionManager
- react-native는 자바스크립트를 실행하는 하나의 스레드위에서 동작한다
- InteractionManager를 사용하면 시간이 오래걸리는 작업을 스케줄링할수 있다???

### TimerMixin
- 타이머관리를 제대로 해주지 못하면 컴포넌트가 언마운트되었을때 시간초과로 인해 크래시와 버그가 만들어질 가능성이 있다
- TimerMixin을 사용하면 컴포넌트가 언마운트 되었을때 타이머 관련 리소스를 해제할수가 있다


# 누구든지 하는 리액트 props/state

## prop
- 컴포넌트 호출시 넘겨주는 prop 데이터는 this.xxx 로 접근이 가능하다

## defaultProps
- prop 기본값설정


## 함수형 컴포넌트
- 기본 props만 받아와서 출력하는 컴포넌트의 경우 함수형태로 작성할수 있다

```
### 클래스 형태 MyName

import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '기본이름'
};

export default MyName;


### 함수 형태 MyName

import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;

```

- 함수형태는 state와 lifecycle이 존재하지 않기때문에 , 좀더 빠르고, 메모리를 덜 사용한다 , 하지만 별 차이가 없다더라

## state
- 동적인 데이터를 다룰때 사용한다
- 클래스필드나 생성자에서 사용할수가 있다

## 메서드 작성

```
 !!! 아래와 같이 함수형으로 작성합시다 !!!
 handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

 만약 그렇지 않고 일반 함수 처럼 아래와 같이 작성한다면
 handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }
 this가 undefined로 나타나서 제대로 처리되지 않게 된답니다, 이유는 버튼의 클릭이벤트로 함수콜할때 this와의 연결이 끊겨버리게 되므로 constructor에서 귀찮은 바인딩 작업을 해주어야 한다
```


## setState 
- state에 있는 값을 바꾸기 위해서는 무조건 this.setState를 거쳐야 한다.
- setState를 호출하게 되면 무조건 리렌더링을 하도록 설계되어있다

## 이벤트 설정
- 이벤트 이름은 camelCase로 설정한다, " onclick -> onClick "
- 이벤트에 전달해주는 값은 함수여야 한다