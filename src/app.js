"use strict";
//이크마 스크립트 문법 준수한다고 명시한거임

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");

//앱세팅
app.set("views" , "./views");
app.set("view engine" , "ejs");


app.use("/",home); // use 미들 웨어를 등록해주는 메서드

module.exports = app;

//app.listen(3000 , function() {
  // 위에거랑 아래거랑 똑같은거임  
// app.listen(3000, ()=>{
//function을 안쓰는대신 => 이렇게 표기하기도하나봄
//그  http 모듈은 다운을 받지않아도 서버가 켜지는것 같은데
//하지만 express 서버는  express를 다운 받아야지 서버사용가능
// express서버 다운로드 명령어
//npm install express --save
//전체주석처리 ctrl=/
//npm install ejs -s
//package.json 설치 
//npm init 소프트웨어 초기화 
//npm init -y 모든것이 소프트웨어 그냥 기본값으로 세팅
//https://www.npmjs.com/
//package.json 사용자가만든 이 웹서버의 정보가
//담겨있음  좀더 명확한 버전정보 등등 이 나와잇음
