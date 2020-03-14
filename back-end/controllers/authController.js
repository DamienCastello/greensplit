const jwt = require('jsonwebtoken');
const User = require('../models').User;
const { getHost } = require('../utils/ip');
const bcrypt = require('bcrypt');

module.exports = {
    signIn: function (req, res, next) {
        User.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password) === true) {
                        /* Signin jwt with your SECRET key */
                        const token = jwt.sign(user, process.env.JWT_SECRET);
                        /* Return user and token in json response */
                        res.json({ user, token });
                    } else {
                        res.status(404).json({ message: 'wrong password' });
                    }
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((error) => { res.status(500).json({ error }); });
/*
        //By default passport save authenticated user in req.user object 
        const user = {
            email: req.body.email,
            password: user.password
        };
*/
    },
    signUp: function (req, res, next) {
        console.log("check file", req.file ? `${getHost()}/${req.file.path}` : null)
        User.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            avatar: req.file ? `${getHost()}/${req.file.path}` : null,
            isAdmin: req.body.isAdmin || false,
            age: req.body.age,
            city: req.body.city,
            zipcode: req.body.zipcode,
            address: req.body.address


        })
            .then((newUser) => {
                const userDatas = {
                    id: newUser.id,
                    isAdmin: newUser.isAdmin,
                    email: newUser.email,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    age: newUser.age,
                    city: newUser.city,
                    zipcode: newUser.zipcode,
                    address: newUser.address,
                    avatar: newUser.avatar
                };

                //not incorporate yet
                //mailer(userDatas, newUser.email, 'welcome');
                const token = jwt.sign(userDatas, process.env.JWT_SECRET);
                console.log("check token:", token)
                console.log("check data", userDatas)
                /* Return user and token in json response */
                res.json({ user: userDatas, token });
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({ message: error.message, error });
            });
    },
    deleteAccount: function (req, res, next) {
        User.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user) {
                    user.destroy()
                        .then((deletedUser) => { res.json({ user: deletedUser }); })
                        .catch((error) => { res.status(500).json({ error }); });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((error) => { res.status(500).json({ error }); });
    },
    changePassword: function (req, res, next) {
        User.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user) {
                    bcrypt.compare(req.body.oldPassword, user.dataValues.password, function (err, result) {
                        if (result) {
                            user.update({ password: req.body.password })
                                .then((updatedUser) => { res.json({ user: updatedUser }); })
                                .catch((error) => { res.status(500).json({ error }); });
                        } else {
                            res.status(401).json({ message: 'Invalid password' });
                        }
                    });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((error) => { res.status(500).json({ error }); });
    },
    forgetPassword: function (req, res, next) {
        const generatePassword = () => {
            let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            let password = '';
            for (let i = 0; i < 10; i++) {
                const randomChar = char[Math.floor(Math.random() * char.length)];
                password += randomChar;
            }
            return password;
        };

        //Verify if user exists in db
        //Todo add email as query parameter
        //TODO Use other function than findAll to get only one result
        User.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (!user) {
                    return res.status(500).json({ message: 'Email introuvable merci de verifier' });
                }

                //Randomly generate a new password
                //Encrypt new password (bcrypt)
                //TODO Use other function than findAll to get only one result    
                const password = generatePassword();
                user.update({
                    password
                })
                    .then((updatedUser) => {
                        const userDatas = {
                            id: user.id,
                            password: password //in email sends we return new password not encrypted
                        };

                        //mailer(userDatas, user.email, 'resetPassword');
                        res.json({ updatedUser });
                    })
                    .catch((error) => {
                        res.status(500).json({ error });
                    });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
};
