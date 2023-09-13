import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/appController.js';

//post methods
router.route('/register').post(controller.register); //register user
// router.route('/registerMail').post(); //send mail
router.route('/authenticate').post((req,res) => res.end()); //auth user
router.route('/login').post(controller.login); //login


//get methods
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateOTP').get(controller.generateOTP); //random otp
router.route('/verifyOTP').get(controller.verifyOTP); //verify generated otp
router.route('/createResetSession').get(controller.createResetSession); //reset all the variables

//put methods
router.route('/updateuser').put(controller.updateUser); //update user profile
router.route('/resetPassword').put(controller.resetPassword); //reset password


export default router;