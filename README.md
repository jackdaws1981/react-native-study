# study-react-native

## 초기 환경 설정



노드환경 설정후 해당 패키지를 설치

    ./npm install -g create-react-native-app

패키지로 프로젝트 생성/실행

    ./create-react-native-app AwesomeProject
    ./cd AwesomeProject
    ./npm start

`* npm version은 4버전으로 설치해야함 ( 5버전이 설치되었을 경우 "npm install -g npm@4" 실행 필요`<br>
`* 실행 에러가 날 경우 watchman 설치` <br>
`* 다른 머신에 clone을 한경우 npm install 커맨드로 환경을 구성해주어야 함`

Expo 클라이언트앱을 설치하여 QR code 스캔을 통한 프로젝트 열기

## Hello World 타이핑

- Expo 클라이언트로 바로 실행이 가능하다
- reactive-native-cli 설치후 "react-native init" 커맨드로 android, ios프로젝트를 같이 생성 가능.

## Props
- props == 프로퍼티
- 외부에서 컴포넌트 생성시 설정하면 , 자동으로 this.props의 어트리뷰트로 바인딩되어 사용가능
- 아래 문법은 AwesomeProject의 앱을 실행할때 Banans컴포넌트를 출력하라는 의미

```
AppRegistry.registerComponent('AwesomeProject',()=>Bananas)
```

## State
- props는 외부에서 접근가능한반면, State는 컴포넌트 내부에서 사용됨.
    - 참조하는 경우 state변수로 사용하고, 생성자가 아닌 다른곳에서 값을 변경시 setState메서드를 사용한다.
    - setState메서드 호출시 다시 렌더링된다.


## Style
- 기존 CSS의 '-'로 되어있던 프로퍼티들이 카멜형식의 변수이름을 변경됨 
```
background-clor => backgroundColor
```


## Height and Width
- 고정 길이
    - 단위는 존재하지 않고 픽셀만 표기
- 유동 길이
    - 부모뷰의 flex값이 설정 되어있지않으면 자식뷰들은 출력되지 않는다. ( 내부적으로 부모뷰의 크기를 상대적 비율로 flex값으로 나누어 계산하는듯 )
    - flex값이 사용되면 , height의 값은 무시처리

## Layout with Flexbox
- flexDirection
    - flex를 적용할 방향을 설정한다. row, column, 기본값은 column
- Justify Contet
    - flex-start, center, flex-end, space-around, space-between and space-evenly (정의가 없다고 나오고 있음)
- Align Items
    - flex-start, center, flex-end, and stretch.


## Handling Text Input
- 딱히 별 내용 없음, 내부 state 객체에 대한 핸들링 메서드

## Handling Touches
- TouchbleHighlight : 기본속성, 터치시 하이라이트 색상 처리
- TouchableOpacity : 버튼의 opacity를 변경한다
- TouchableNativeFeedback : 네이티브와 연동한다
- TouchableWithoutFeedback : 액션에 대한 로직만 처리, 화면상 변경사항 없음

onPress , onLongPress 함께 적용 가능

## Using a ScrollView
- require 사용시 한번 로드된 객체는 캐싱된다
- horizontal = {true|false} 프로퍼티를 사용하여 방향을 정한다
- maximumZoomScale={number} minimumZoomScale={number} 를 사용하여 zoom size validation

## Using a ListView
- FlatList : 리스트형태 출력
- SectionList : 섹션 헤더 출력

## Networking
- 리액트는 rest 통신을 위한 fetch api 를 제공한다
```

// 비동기로 처리해야 한다.
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

// ES2017의 async/await 문법을 이용하여 처리할수도 있다.
async function getMoviesFromApi() {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json'
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
```
- *** iOS의 경우 암호화되지 않은 통신의 경우 차단하기 때문에 , 설정이 필요하다 ***
- 당연히 fetch대신 XMLHttpRequest 를 사용할수도 있다.
- 당연히 기본 웹소켓도 사용


## More Resources
- [Awesome React Native](http://www.awesome-react-native.com/)에 가면 좋은 라이브러리들이 많다드라
- 깃허브에 가면 예제가 많다드라
- 리액트개발을 할수 있는 개발킷트가 좋은게 많다, 빨리 시작해라

## 해야할일
- 프로젝트생성되는 설정파일의 의미
- ES2015 문법을 대강이라도 익혀야 할듯
- 리엑트의 라이프사이클 이해 필요






