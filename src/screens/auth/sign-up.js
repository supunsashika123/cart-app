import axios from 'axios';
import React, { useState } from 'react';

const initialState = {name: '', email: '', password: '',mobno:''}

const SignUp = () => {

    const [formData, setFormData] = useState(initialState)
    

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:4001/user/signup",
            data: { 
                name : formData.name,
                email : formData.email,
                password : formData.password,
                mobno : formData.mobno,
            }
        },{
            headers: {"Access-Control-Allow-Origin": "*"}
        }
        ).then(response => {
            console.log(response)
        })
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