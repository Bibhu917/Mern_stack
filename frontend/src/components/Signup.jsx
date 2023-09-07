import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import { FaUser, FaEnvelope, FaLock, FaKey, FaPhone } from 'react-icons/fa'

export const Signup = () => {
    const [userData,setUserData ] = useState({ username:"", email:"", password:"",repassword:"", mobileNumber:"" })
    const nav= useNavigate()
    const handleChange = (e) => {
        setUserData({...userData,[e.target.name]: e.target.value,});
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const data={
          username:userData.username,
          email:userData.email,
          password:userData.password,
          repassword:userData.repassword,
          mobileNumber:userData.mobileNumber,
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/register", data);
            nav('/login')
          } catch (error) {
            console.error("Error:", error);
          }
    }
  return (
    <section className="vh-100" style={{backgroundColor:"#eee"}}>
    <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                   <FaUser className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name='username' onChange={handleChange} placeholder='Your Name'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaEnvelope className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name='email' onChange={handleChange} placeholder='Your Email'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaPhone className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" className="form-control" name='mobileNumber' onChange={handleChange} placeholder='Your mobile number'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaLock className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' onChange={handleChange} placeholder='Password'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaKey className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" name='repassword' onChange={handleChange} placeholder='Repeat your password'/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Sampleimage" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>

  )
}
