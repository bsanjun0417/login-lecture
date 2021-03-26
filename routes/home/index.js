"use strict";
//이크마 스크립트 문법 준수한다고 명시한거임
//이 라우터 부분의 index.js는 웹에서 url주소 만들어논거
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
//home.ctrl.js에서 export해서 보낸거 받음 

router.get("/" , ctrl.hello);
  //index 여기는 루트입니다
  router.get("/login" , ctrl.login);



  module.exports = router;
  //외부로 내보내기!