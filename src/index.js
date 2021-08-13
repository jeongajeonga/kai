import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(  //render은 화면에 html 뷰를 생성해 주는 역할을 함
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//여기까지 App.js에서 생성된 리액트 코드를 index.js로 불러오는 코드
//<App/> 리액트 컴포넌트 가져와서 사용함 App.js 에서 export 되는 App class