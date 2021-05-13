import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { httpGetRequest } from '../../helpers/networkRequestHelper';
import { useParams } from 'react-router';

const initialState = { email: '', password: '' }

const ResetPw = () => {
    const {token} = useParams();

    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
      const handle = async () => {
      let res = await httpGetRequest({
        url: 'user/reset?token='+ token,
      })  
      console.log(res);
      }
      handle();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
       
         // axios({
        //     method: "POST",
        //     url: "http://localhost:4001/user/login",
        //     data: { 
        //         email : formData.email,
        //         password : formData.password,
        //     }
        // },{
        //     headers: {"Access-Control-Allow-Origin": "*"}
        // }
        // ).then(response => {
        //     console.log(response)
        // })
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
       
    }

  
    return (
        <div>

            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    required
                />
                 <input
                    type="text"
                    name="rePassword"
                    placeholder="ReEnterpassword"
                    onChange={handleChange}
                    required
                />


                <button type="submit">Reset Password</button>

            </form>


        </div>
    );
}

export default ResetPw;


