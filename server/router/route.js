import { Router } from "express";
const router = Router();

//post methods
router.route('/register').post((req,res) => res.json('register route')); //register user
router.route('/registerMail').post(); //send mail
router.route('/authenticate').post(); //auth user
router.route('/login').post(); //login


//get methods
router.route('/user/:username').get(); //user with username
router.route('/generateOTP').get(); //random otp
router.route('/verifyOTP').get(); //verify generated otp
router.route('/createResetSession').get(); //reset all the variables

//put methods
router.route('/updateuser').put(); //update user profile
router.route('/resetPassword').put(); //reset password


export default router;