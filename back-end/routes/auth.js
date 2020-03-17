const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Require and setup uploader to keep files in uploads folder
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatars/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } });

/* POST email and password and return jwt if authenticated successfull */
router.post('/signin/user', authController.signInUser);

router.post('/signin/company', authController.signInCompany);

router.post('/signin/runer', authController.signInRuner);

/* POST create new user. multer create an object, we can access it with req.avatar */
// TODO fix validationCode before avatar upload
router.post('/signup/user', upload.single('avatar'), authController.signUpUser);

router.post('/signup/company', upload.single('avatar'), authController.signUpCompany);

router.post('/signup/runer', upload.single('avatar'), authController.signUpRuner);

//not incorporate yet
/*

router.put('/change-password', passport.authenticate('jwt', { session: false }), authController.changePassword);

router.delete('/delete-account', passport.authenticate('jwt', { session: false }), authController.deleteAccount);

router.post('/reset', authController.forgetPassword);
*/

module.exports = router;
