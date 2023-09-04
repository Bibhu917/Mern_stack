const Router = require('express');
const userRoute = Router();
const userModel = require('../model/model');

userRoute.post('/register', async (req, res) => {
    try {
        const { username, email, password, repassword, mobileNumber } = req.body;
        const existingUser = await userModel.findOne({ email })
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (existingUser) {
            return res.send({ message: "User already exists" })
        }
        if (!username || !email || !password || !mobileNumber || !repassword) {
            return res.send({ message: "Fill all credentials" })
        }
        if (!emailRegex.test(email)) {
            return res.send({ message: "Please Provide valid email address" })
        }
        if (!passwordRegex.test(password)) {
            return res.send({ message: "Please Provide valid password" })
        }
        if (mobileNumber.length < 10) {
            return res.send({ message: "Please Enter valid mobile number" })
        }
        if (username.length < 5) {
            return res.send({ message: "Please Enter valid username" })
        }
        if (password !== repassword) {
            return res.send({ message: "Password does not match" })
        }
        const newUser = new userModel({ username, email, password, repassword, mobileNumber });
        await newUser.save();
        return res.send({ message: "Register successfully", newUser })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})
module.exports = userRoute;