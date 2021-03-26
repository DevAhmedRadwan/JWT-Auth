const { Router } = require("express");
/****************************** Required routes  ******************************/
const auth = require("./auth");
/******************************* initializing *********************************/
const router = Router();
/************************************ Routes **********************************/
router.use("/auth",auth);
/************************************ Exports **********************************/
module.exports = router;