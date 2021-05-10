import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../store';
import Button from '../../components/common/button'

const Login = () => {
    const { state, setState } = useContext(AppContext)

    console.log(state)

    const udpateState = () => {
        setState({ user: { ...state.user, name: 'updated name' } })
    }

    return (
        <div>
            <div>Login!!! {state.user.name}</div>
            <Button onClick={udpateState} title={'login'} />
        </div>
    );
}

export default Login;