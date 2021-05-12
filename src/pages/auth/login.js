import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../store';
import Button from '../../components/common/Button'

const Login = () => {
    const { state, setState } = useContext(AppContext)

    console.log(state)

    const udpateState = () => {
        localStorage.setItem("TOKNE","HAHA")
        setState({ user: { ...state.user, name: 'updated name' } })
        window.location.replace('/home')
    }

    return (
        <div>
            <div>Login!!! {state.user.name}</div>
            <Button onClick={udpateState} title={'login'} />
        </div>
    );
}

export default Login;