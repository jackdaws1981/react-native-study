# study-react-native

# 설정

*** npm version은 4버전으로 설치해야함 ( 5버전이 설치되었을 경우 "npm install -g npm@4" 실행 필요 )  

노드환경 설정후 해당 패키지를 설치

    npm install -g create-react-native-app

패키지로 프로젝트 생성/실행

    create-react-native-app AwesomeProject
    cd AwesomeProject
    npm start

    ** 실행 에러가 날 경우 watchman 설치
    ** 다른 머신에 clone을 한경우 npm install 커맨드 입력

Expo 클라이언트앱을 설치하여 QR code 스캔을 통한 프로젝트 열기


# Hello World 타이핑
- Expo 클라이언트로 바로 실행이 가능하다
- reactive-native-cli 설치후 "react-native init" 커맨드로 android, ios프로젝트를 같이 생성 가능.

# Props
props == 프로퍼티
    
외부에서 컴포넌트 생성시 설정하면 , 자동으로 this.props의 어트리뷰트로 바인딩 된다.

아래 문법은 AwesomeProject의 앱을 실행할때 Banans컴포넌트를 출력하라는 의미

    AppRegistry.registerComponent('AwesomeProject',()=>Bananas)

# State
props는 외부에서 접근가능한반면, State는 컴포넌트 내부에서 사용됨.
- 참조하는 경우 state변수로 사용하고, 생성자가 아닌 다른곳에서 값을 변경시 setState메서드를 사용한다.
- setState메서드 호출시 다시 렌더링된다.


# 해야할일
- ES2015 문법을 대강이라도 익혀야 할듯
- 리엑트의 라이프사이클 이해 필요


