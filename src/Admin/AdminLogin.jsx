import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaEye } from 'react-icons/fa';

const Login = () => {
  const tmpStoreKey = 'ToolsFinder(GoodToolsAi)AdminPanelUser'
  sessionStorage.removeItem(tmpStoreKey)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = { email, password }

    if (email.length != 0 && password.length != 0) {
      fetch('https://api.goodtools.ai//getuser', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',

        },
        body: JSON.stringify(data)
      })
      .then (res => res.json())
      .then(data =>{
        if(data.stat){
          sessionStorage.setItem('ToolsFinder(GoodToolsAi)AdminPanelUser', JSON.stringify(data))
          event.target.reset()
          navigate('/dashboard')
          
        } else {
          alert('user not found')
        }
      })
    } else{
      alert('No fields can remain empty')
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="hero-content flex-col lg:flex-row mx-auto w-full">
          <div className="h-[400px] w-[400px] mr-12">
            <img
              src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body h-[400px] w-[400px]">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="password">Password</span>
                  </label>
                  <div className="flex justify-between">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-[75%]"
                    />
                    <button
                      type="button"
                      className="btn btn-outline ms-4"
                      onClick={togglePasswordVisibility}
                    >
                      <span>
                        <FaEye />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn text-orange-500 btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
