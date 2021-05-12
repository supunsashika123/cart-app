import React from "react"

const DashboardLayout = (props) => {
    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <div>layout working</div>
                <div className="main-content">{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default DashboardLayout;