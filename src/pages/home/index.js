import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";


const Home = () => {

    const history = useHistory();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        let token = localStorage.getItem('TOKEN')
        var decoded = jwt_decode(token);
        console.log(decoded.name)
        console.log(decoded.email)
        setName(decoded.name)
        setEmail(decoded.email)
    }, []);

    const logout = () => {
        localStorage.clear(); 
        history.push("/login")
    }

    return (
        <div>

            <h1>{name}</h1>
            <h1>{email}</h1>
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
}

export default Home;
