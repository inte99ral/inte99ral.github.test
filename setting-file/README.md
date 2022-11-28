# 평소대로의 세팅

## VS code Extension

- Auto Rename Tag
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- git graph

<br/>

## 진행사항

- ### react & typescript 세팅

  - npx create-react-app [PROJECT_NAME] --template typescript

  <br/>

  - tsconfig, compilerOptions 안에 baseUrl 설정

    ```json
    "baseUrl": "src",
    ```

    - 베이스 주소가 src로 설정되었기 때문에 앞으로 import 할 때, 뒤에 /../../../ 없이 주소를 적을 경우 src 부터 시작한다.

  <br/>

  - package.json 확인

    - warning 이 뜨고 npm audit (npm 에서 코드 취약점을 파악하는 명령어) 를 쳤을 시에 nth-check 가 나온다면 걱정하지 말자.
    - 경고하자면 `npm audit fix --force` 로는 해결할 수 없다. 오히려 다른 패키지들이 깨질 수 있으니 주의
    - npm 으로 패키지를 다운로드 받고 있다면 원래 나와야 하는 게 맞다.
    - 문제의 원인은 package.json 안에 있는 `"react-scripts"` 이다.
    - npm은 해당 코드로 Node.js 앱을 돌릴 때 생기는 취약점을 경고한다. 하지만 CRA(create-react-app)는 정적 빌드 툴이고, Node.js와 같은 방식으로 작동하지 않으며. npm audit은 CRA의 몇몇 부분을 취약점으로 오탐지한다.
    - 따라서 문제되는 의존성이 npm에 탐지되지 않게하기 위하여 다음의 방법을 사용한다.
    - package.json 안의 "dependencies" 안에 있는 "react-scripts" 을 "devDependencies" 로 이동시킨다.
    - 그 후, npm audit 대신 npm audit --production 을 사용하면된다.

<br/>

- npm install react-router-dom @types/react-router-dom

  - 라우터 설정을 정의할 AppRouter.tsx 를 생성

    ```typescript
    // API & Library
    import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

    // Components
    import { HomePage } from "components/pages/HomePage";
    import { ErrorPage } from "components/pages/ErrorPage";

    export const AppRouter = () => {
      // Return
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/*" element={<Navigate replace to="/error" />} />
            </Routes>
          </BrowserRouter>
        </>
      );
    };
    ```

- ### eslint & prettier 세팅

  - 앞서서 eslint & prettier 란?
    - eslint 는 현재 개발자들에게 매우 인기있는 JavaScript linter이다, lint 란 소스 코드를 사전 검사하여 버그, 스타일 오류, 의심스러운 구조체들을 파악하여 로직 에러를 사전에 막아주는 도구이다.
    - prettier는 대다수가 쓰는 code formatter로 띄어쓰기, 개행 줄, 따옴표 등의 코드 생김새를 체크하고 강제로 지키도록 만들어 팀 간에 약속한 코드 컨벤션을 유지시켜준다 . eslint 의 스타일 체크보다 훨씬 기능이 다양하며, 자동으로 code format 를 맞춰 변화시켜주기 때문에 매우 편리하다. 한 명이 개발한 것 처럼 이쁜 코드를 만들어주는 도구이다.

  <br />

  - 빌드 시가 아니라 IDE 에서 개발 시 실시간 체크하기 위해서 vscode 의 extension `eslint` 와 `prettier` 를 설치해야한다.

  <br />

  - 프로젝트에 필요한 패키지들을 내려받는다. 필요한 것은 다음과 같다.

    - eslint
    - prettier
    - eslint-config-prettier
      - eslint에서 prettier와 충돌할 수 있는 rule을 꺼버린다.
      - 코드 오류만로 eslint, 코드 포맷팅만 prettier로 잡을 수 있다.
    - eslint-plugin-prettier
      - prettier를 eslint의 rules로써 동작하게 한다.
      - 코드 포맷팅 문제가 사전에 오류 메세지로 출력되서 파악하기 쉬워진다.
      - 단, 오류 메시지가 지나치게 많아져서 느려진다.

    <br />

    - `npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev`
      - 다음의 명령어로 위에서 언급한 패키지들을 내려 받는다.

  <br />

  - prettier 세팅

    - vscode 설정에서 default editor 를 prettier 로 바꿔줄 것
    - 편하게 쓰기 위해서 editor: format on save 를 true 값으로 해주면 저장 시에 자동으로 코드를 알맞게 바꿔준다.
    - 특수 법칙을 적용할 디렉토리에 `.prettierrc.json` 파일을 생성하고 내부에 법칙을 작성한다.

      ```json
      {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 100,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
      ```

  <br />

  - eslint 세팅

    - eslint --init 명령어를 통해 빠른 초기 설정이 가능하다.
    - 예시 프로젝트에서는 react 와 typescript 를 사용한다.
    - javascript module 과 commonjs 중 무엇을 쓰는 지 질문하는데 module 이 더 최신 방식이다. 뭐가 뭔지 모르겠다면 본인이 타 파일의 코드를 불러오는 방법을 보면 안다.

      - commonjs : 가져올 때는 `require` 로, 내보낼때는 `module.exports` 를 쓰는 구 방법

      - javascript module : `import` 와 `export` 을 사용하여 EMCA Script modules(또는 ES modules)를 가져오고 내보내는 방법. JS 코드 패키징의 공식 표준 형식이며 대부분의 최신 웹 브라우저는 기본적으로 모듈을 지원한다.

    - 설정하고 나면, 추가적으로 내려받아야할 설정들까지 자동으로 받아준다. 그 후, .eslintrc 파일이 생성되었을 것이다. 참고로 이 설정파일의 형식을 먼저 묻는데 js 로 선택할 경우, 최상위 디렉토리가 아니면 인식이 안될 수 있다. json 이 무난하다.

    - .eslintrc.json 에 프리티어 설정을 적용한다.

      ```json
      {
        // 상위 폴더에 적용 유뮤.
        "root": false,

        // env 환경변수 적용
        "env": {
          "browser": true,
          "es2021": true
        },

        // 추가한 plugin에서 사용할 규칙을 설정.
        "extends": [
          "plugin:react/recommended",
          "standard-with-typescript",
          "plugin:prettier/recommended"
        ],

        "overrides": [],

        // 구문 분석을 위해 사용하는 parser 설정
        "parser": "@typescript-eslint/parser",

        // 구문 분석할 언어 옵션 설정
        "parserOptions": {
          // 프로젝트 tsconfig 주소
          "project": ["front-end/tsconfig.json"],
          "ecmaVersion": "latest",
          "sourceType": "module"
        },

        "plugins": ["react"],

        // 프로젝트에 사용할 규칙을 설정.
        // 규칙에 추가 옵션이 있는 경우 배열로 설정 가능.
        // 참고 : https://eslint.org/docs/latest/rules/
        // off 또는 0 사용시 규칙을 사용하지 않음.
        // warn 또는 1 사용시 규칙을 경고로 사용.
        // error 또는 2 사용시 규칙을 오류로 사용.
        "rules": {},

        // .로 시작하는 설정파일이나 node_modules, 외의 무시할 파일 영역
        "ignorePatterns": ["build", "dist", "public"],

        // 리액트 버전 자동탐지
        "settings": {
          "react": {
            "version": "detect"
          }
        }
      }
      ```