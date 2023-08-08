const  router =require('express').Router();
const {getflightdata}=require('../controller/controller');

router.post('/search',getflightdata);


module.exports=router;