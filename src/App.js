import React, {Component,useEffect,useState} from 'react';
//css 파일을 import해서 스타일을 적용해줄 수도 있다.
//import './App.css';
const App = () => {
  const [email, setEmail]=useState("");
  const [pw, setPw]=useState("");
  const [nickName, setNickName]=useState("");
  const [isAgreeInfo, setIsAgreeInfo]=useState("");
  const [signupPath, setSignupPath]=useState("");
  const onEmailChange =(e) => {
    setEmail(e.target.value)
  }
  const onPwChange =(e) => {
    setPw(e.target.value)
  }
  useEffect( ()=>{
    if(pw ==""){
      return  //useEffect는 처음에 무조건 한번은 실행, 입력 값 없을 때 실행할 필요 없! 
    }
    console.log('pw is changeing');
    console.log(pw);
  },[pw]) //dependencies
  const updateIsAgreeInfo =() => {
    setIsAgreeInfo(prev => !prev)
  } 
  /*
  const updateIsAgreeInfo =() => {
    setIsAgreeInfo(!isAgreeInfo )
  } 
  */
 const onSignupPathChange = (e) => {
   setSignupPath(e.target.value)
 }
 const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
 const submit = () => {
   const payload ={
     email: email, 
     pw: pw, 
     nickName: nickName, 
     isAgreeInfo: isAgreeInfo,
     signupPath: signupPath
   }
   if(pw.length<6){
     alert('6자 이상의 비밀번호를 입력하세요');
     return
   }
   if(!validateEmail(email)){
     alert('올바른 이메일을 입력하시오');
     return
   }

 }
  return<div>
    <img src="img/google.png" />
    <input value={email} onChange={e=>onEmailChange(e)} placeholder='email'/>
    <input value={pw} onChange={e=>onPwChange(e)} placeholder='password'/>
    <input checked={isAgreeInfo} type="checkbox" onClick={e => updateIsAgreeInfo()}/>
    <select value={signupPath} onChange={e=>onSignupPathChange(e)}>
      <option value={"search"}>검색</option>
      <option value={"ads"}>광고</option>
      <option value={"etc"}>이외</option>
    </select>
    <button onClick ={submit}>제출</button>
  </div>
}

export default App






