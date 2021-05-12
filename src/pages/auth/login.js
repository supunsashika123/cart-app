import React, { useContext, useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../../store';
import Button from '../../components/common/button'
import axios from 'axios';

const initialState = { email: "", password: "" }


const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(initialState)

    // const { state, setState } = useContext(AppContext)

    // console.log(state)

    // const udpateState = () => {
    //     setState({ user: { ...state.user, name: 'updated name' } })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios({
            method: "POST",
            url: "http://localhost:4001/user/login",
            data: {
                email: formData.email,
                password: formData.password,
            }
        }, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }
        ).then(response => {
            if (response.data.isLogged) {
                localStorage.setItem('TOKEN', response.data.token)
                history.push("/home/index")
            }
            else{
                console.log(response.data.message)
            }
        })

    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const OnGoogleLoginSuccess = (response) => {
        console.log(response.tokenId)
        axios({
            method: "POST",
            url: "http://localhost:4001/user/googlelogin",
            data: { tokenID: response.tokenId }
        }, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }
        ).then(response => {
           
            if (response.data.isLogged) {
                localStorage.setItem('TOKEN', response.data.token)
                history.push("/home/index")

            }
            
        })
    }

    const OnGoogleLoginFailure = (response) => {
        console.log(response)
    }

    const goSignUp = () =>{
        history.push("/auth/sign-up")
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
                <Link to="/auth/forgot-pw" className="btn btn-primary">Forget Password?</Link>
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



