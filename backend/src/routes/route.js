const Router = require('express');
const userRoute = Router();
const userModel = require('../model/usermodel');

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
        const data = new userModel({ username, email, password, repassword, mobileNumber });
        await data.save();
        return res.send({ message: "Register successfully", data })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

userRoute.post('/login', async (req, res) => {
    try {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const { email, password } = req.body
        const logindata = await userModel.findOne({ email, password });
        if (!email || !password) {
            return res.send({ message: "Incorrect Username or Password" })
        }
        if (!emailRegex.test(email)) {
            return res.send({ message: "Incorrect Username or Password" })
        }
        if (!logindata) {
            return res.status(400).send({ message: "Incorrect Username or Password" })
        }
        const limitedResponse = {
            username: logindata.username,
            email: logindata.email,
            password: logindata.password
        };
        return res.send({ message: "Login successful", logindata: limitedResponse })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Server error" })
    }

})

userRoute.patch('/forget-password/:id', async (req, res) => {
    try {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        const { id } = req.params
        const { password, repassword } = req.body
        const forgotdata = await userModel.findByIdAndUpdate(id, { $set: { password, repassword } });
        if (!passwordRegex.test(password)) {
            return res.send({ message: "Please Provide valid password" })
        }
        if (password !== repassword) {
            return res.send({ message: "Password does not match" })
        }
        const upadteData = {
            email: forgotdata.email,
            password: forgotdata.password,
        }
        await forgotdata.save();
        return res.send({ message: "password updated successfully", forgotdata: upadteData })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" })
    }

})
module.exports = userRoute;