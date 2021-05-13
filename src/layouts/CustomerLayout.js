import React from "react"
import Header from "../components/customer/Header";

const CustomerLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  )
}

export default CustomerLayout;
