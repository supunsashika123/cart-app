import axios from 'axios';
import React, { useState } from 'react';
import { httpPostRequest } from '../../helpers/networkRequestHelper';
const initialState = {name: '', email: '', password: '',mobno:''}

const SignUp = () => {

    const [formData, setFormData] = useState(initialState)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        let res = await httpPostRequest({
          url: 'user/signup',
          body: {
            name : formData.name,
            email : formData.email,
            password : formData.password,
            mobno : formData.mobno,
          }
        })
          console.log(res.message)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

  

    return (
        <div>
            {/* <div>Login!!! {state.user.name}</div>
            <Button onClick={udpateState} title={'login'} /> */}

            <form onSubmit={handleSubmit}>
                <input
                    type="Text"
                    name="name"
                    placeholder="Username"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

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
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="mobno"
                    placeholder="Mobile Number"
                    value={formData.mobno}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Signup</button>

            </form>


        </div>
    );
}

export default SignUp;
