const express=require('express')
const router=express.Router()
const {register}=require('../controller/usercreate')
const login =require('../controller/login')
router.post('/register',register)
router.post('/login',login)
module.exports=router