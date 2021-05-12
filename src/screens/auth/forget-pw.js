import React, { useState } from 'react'

import axios from 'axios';

const initialState = { email: '', password: '' }

const ForgetPw = () => {

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
         axios({
            method: "POST",
            url: "http://localhost:4001/user/forget-pw",
            data: { 
                email : formData.email,
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

            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />


                <button type="submit">Send</button>

            </form>


        </div>
    );
}

export default ForgetPw;



