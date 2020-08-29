const jwt = require('jsonwebtoken');
const User = require('../models').User;
const Company = require('../models').Company;
const Runer = require('../models').Runer;
const { getHost } = require('../utils/ip');
const bcrypt = require('bcrypt');


//////////////////////////////
// WORK IN PROGRESS ON LOGIN
//////////////////////////////
module.exports = {
    signInUser: async function (req, res, next) {
        await User.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user === null) {
                    console.log('Not found!');
                } else {
                    console.log("check user : ", req.user, "check body : ", req.body);
                    bcrypt.compare(req.body.password, user.password, function (error, response) {
                        if (error) {
                            // handle error
                            console.log("error on compare:", error)
                        }
                        if (response !== true) {
                           console.log('Bad Password!');
                           return res.json({ success: false, message: 'password doesn\'t match' });
                        }
                        if (response) {
                            console.log("response : ", response);
                            //Signin jwt with your SECRET key 
                            //console.log("check object", user.dataValues.email)
                            const token = jwt.sign(user.dataValues, process.env.JWT_SECRET);
                            //Return user and token in json response 
                            //console.log('USER:', user);
                            //console.log('TOKEN:', token);
                            res.json({ user, token });
                        } else {
                            // response is OutgoingMessage object that server response http request
                            return res.json({ success: false, message: 'password doesn\'t match' });
                        }
                    });
                }
            })
            .catch((err) => { console.log("error on findUser", err) })

    },
    signInCompany: async function (req, res, next) {
        await Company.findOne({ where: { email: req.body.email } })
            .then((company) => {
                if (company === null) {
                    console.log('Not found!');
                } else {
                    bcrypt.compare(req.body.password, company.password, function (error, response) {
                        if (error) {
                            // handle error
                            console.log("error on compare:", error)
                        }
                        if (response) {
                            //Signin jwt with your SECRET key 
                            console.log("check object", company.dataValues.email)
                            const token = jwt.sign(company.dataValues, process.env.JWT_SECRET);
                            //Return company and token in json response 
                            console.log('COMPANY:', company);
                            console.log('TOKEN:', token);
                            res.json({ company, token });
                        } else {
                            // response is OutgoingMessage object that server response http request
                            return res.json({ success: false, message: 'password doesn\'t match' });
                        }
                    });
                }
            })
            .catch((err) => { console.log("error on findCompany", err) })

    },
    signInRuner: async function (req, res, next) {
        await Runer.findOne({ where: { email: req.body.email } })
            .then((runer) => {
                if (runer === null) {
                    console.log('Not found!');
                } else {
                    bcrypt.compare(req.body.password, runer.password, function (error, response) {
                        if (error) {
                            // handle error
                            console.log("error on compare:", error)
                        }
                        if (response) {
                            //Signin jwt with your SECRET key 
                            console.log("check object", runer.dataValues.email)
                            const token = jwt.sign(runer.dataValues, process.env.JWT_SECRET);
                            //Return runer and token in json response 
                            console.log('RUNER:', runer);
                            console.log('TOKEN:', token);
                            res.json({ runer, token });
                        } else {
                            // response is OutgoingMessage object that server response http request
                            return res.json({ success: false, message: 'password doesn\'t match' });
                        }
                    });
                }
            })
            .catch((err) => { console.log("error on findRuner", err) })

    },
    signUpUser: function (req, res, next) {
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
                /* Return user and token in json response */
                res.json({ user: userDatas, token });
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({ message: error.message, error });
            });
    },

    signUpCompany: function (req, res, next) {
        console.log("check file", req.file ? `${getHost()}/${req.file.path}` : null)
        Company.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            avatar: req.file ? `${getHost()}/${req.file.path}` : null,
            city: req.body.city,
            zipcode: req.body.zipcode,
            address: req.body.address


        })
            .then((newCompany) => {
                const companyDatas = {
                    id: newCompany.id,
                    email: newCompany.email,
                    name: newCompany.name,
                    city: newCompany.city,
                    zipcode: newCompany.zipcode,
                    address: newCompany.address,
                    avatar: newCompany.avatar
                };

                //not incorporate yet
                //mailer(companyDatas, newCompany.email, 'welcome');
                const token = jwt.sign(companyDatas, process.env.JWT_SECRET);
                /* Return company and token in json response */
                res.json({ company: companyDatas, token });
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({ message: error.message, error });
            });
    },

    signUpRuner: async function (req, res, next) {
        await Company.findOne({ where: { name: req.body.companyName } })
            .then((company) => {
                console.log("check file", req.file ? `${getHost()}/${req.file.path}` : null)
                console.log("check company for runer:", company)
                Runer.create({
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    avatar: req.file ? `${getHost()}/${req.file.path}` : null,
                    city: req.body.city,
                    zipcode: req.body.zipcode,
                    address: req.body.address,
                    companyId: company.id


                })
                    .then((newRuner) => {
                        const runerDatas = {
                            id: newRuner.id,
                            email: newRuner.email,
                            firstname: newRuner.firstname,
                            lastname: newRuner.lastname,
                            city: newRuner.city,
                            zipcode: newRuner.zipcode,
                            address: newRuner.address,
                            avatar: newRuner.avatar,
                            companyId: newRuner.companyId
                        };

                        //not incorporate yet
                        //mailer(runerDatas, newRuner.email, 'welcome');
                        const token = jwt.sign(runerDatas, process.env.JWT_SECRET);
                        /* Return runer and token in json response */
                        res.json({ runer: runerDatas, token });
                    })
                    .catch((error) => {
                        console.log(error.message);
                        res.status(500).json({ message: error.message, error });
                    });
            })
            .catch((err) => { console.log("error on findCompany", err) })
    },

    //not incorporate yet
    /*
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
    */
};
