import axios from 'axios'
import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [regData,setRegData] = useState({email:"", password:""})
  const nav= useNavigate()

  const handleChange = (e) => {
    setRegData({...regData,[e.target.name]: e.target.value,});
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data ={
      email:regData.email,
      password:regData.password,
    }
    try {
      const logData = await axios.post("http://localhost:8080/auth/register",data)
      nav('/home')
    } catch (error) {
      console.log("error", error)
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaEnvelope className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={handleChange} name='email' placeholder='Your Email'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <FaLock className="fa-lg me-3" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" onChange={handleChange} name='password' placeholder='Password'/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <label className="form-check-label" for="form2Example3">
                    <strong>  Already Registered !</strong> <Link to='/'>Signup</Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
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
