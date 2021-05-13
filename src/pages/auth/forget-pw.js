import React, { useState } from 'react'

import { httpPostRequest } from '../../helpers/networkRequestHelper';

const initialState = { email: '' }

const ForgetPw = () => {

  const [formData, setFormData] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let res = await httpPostRequest({
      url: 'user/forget-pw',
      body: {
        email: formData.email,
      }
    })
    

  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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



