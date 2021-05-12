import React from "react"

const AuthLayout = (props) => {
    return (
        <React.Fragment>
            this is the auth layout
            {props.children}
        </React.Fragment>
    )
}

export default AuthLayout;