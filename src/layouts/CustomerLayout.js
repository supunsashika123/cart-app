import React from "react"

const CustomerLayout = (props) => {
    return (
        <React.Fragment>
            this is the customer layout
            {props.children}
        </React.Fragment>
    )
}

export default CustomerLayout;