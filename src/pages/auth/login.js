import React, { useContext, useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { Link, useHistory } from "react-router-dom";
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import { AppContext } from '../../store';
import Button from '../../components/common/button'
import axios from 'axios';

const initialState = { email: "", password: "" }


const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(initialState)


    const handleSubmit = async(e) => {
        e.preventDefault()

        let res = await httpPostRequest({
          url: 'user/login',
          body: {
            email : formData.email,
            password : formData.password,
          }
        })
          if (res.isLogged) {
            localStorage.setItem('TOKEN', res.token)
            history.push("/home")
        }
        else{
            console.log(res.message)
        }


    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const OnGoogleLoginSuccess = async(response) => {

      let res = await httpPostRequest({
        url: 'user/googlelogin',
        body: {
          tokenID: response.tokenId 
        }
      })
        if (res.isLogged) {
          console.log(res)
          localStorage.setItem('TOKEN', res.token)
          history.push("/home")
      }
      else{
          console.log(res.message)
      }
       
    }

    const OnGoogleLoginFailure = (response) => {
        console.log(response)
    }

    const goSignUp = () =>{
        history.push("/signup")
    }

    return (
        <div>
            {/* <div>Login!!! {state.user.name}</div>
            <Button onClick={udpateState} title={'login'} /> */}

            <form onSubmit={handleSubmit}>


                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
                <button onClick = {goSignUp} >SignUp</button>
                <Link to="/forgetpass" className="btn btn-primary">Forget Password?</Link>
            </form>
            <GoogleLogin
                clientId="37361668095-bhna113hnh345ot5rpj7ddhfcubsr6sa.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={OnGoogleLoginSuccess}
                onFailure={OnGoogleLoginFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default Login;



