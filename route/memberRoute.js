import express from "express";
import * as memC from '../controller/memberController.js'

const router = express.Router();

router.post(`/members`,memC.postMember)
router.post(`/members/login`,memC.loginUser)
router.get(`/members/logout`,memC.logOutUser)
router.post('/members/uploadimg',memC.uploadMember)

export default router 