"use strict";
const express = require("express");
const router = express.Router();


const hello = function(req,res){
    res.render("home/index");
  };

  const login = function(req,res){
    res.render("home/login");
  };
      
  module.exports = {
      hello,
      login,
  };
  //index 로 받을수있게 export로 외부로 보내버림
  //이제 index.js에 받는 명령어가 있음