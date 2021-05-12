import React from "react"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = (props) => {
    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header />
                <Sidebar
                    isMobile={false}
                />
                <div className="main-content">{props.children}</div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default DashboardLayout;