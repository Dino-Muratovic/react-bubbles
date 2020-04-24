import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {

  console.log(`props -->`, props)

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  //Set up initial state
  const initialState = {
    username:"",
    password:"",
    isFetching: false
  }


  const [login, setLogin] = useState(initialState);

  //Handle change
  const handleChange = e => {
    setLogin({...login, [e.target.name] : e.target.value})
  }

  //Handle Submit
  const handleSubmit = e => {
    e.preventDefault();

    setLogin({...login, isFetching:true});

    //**********/ Save the token to localStorage

        axiosWithAuth()
        .post('/api/login', login)
        .then(res => {
          //console.log({res})
          //res.data.payload - where the token is
          localStorage.setItem('token', res.data.payload)
          props.history.push('/bubblepage') // this endpoint MUST match endpoint on ProtectedRoute in App.js
        })
        .catch(err => console.log(err))   
      }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={login.username}
                    onChange={handleChange}
                    />
                    <br/>


                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={login.password}
                      onChange={handleChange}
                      />
                      <br/>

                    <button>Login</button>

                    {login.isFetching && "Please wait ... logging you in"}

                </form>
      
    </div>
  );
};

export default Login;
