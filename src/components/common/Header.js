import PropTypes from 'prop-types'
import React, { useState } from "react"
import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle } from "reactstrap"


import logo from "../../assets/images/food-court.png"
import logoDark from "../../assets/images/food-court.png"


const Header = props => {
  const [search, setsearch] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {

    // if (props.leftSideBarType === "default") {
    //   props.changeSidebarType("condensed", isMobile)
    // } else if (props.leftSideBarType === "condensed") {
    //   props.changeSidebarType("default", isMobile)
    // }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="200" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="200" />
                </span>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 20 }}><h2>Food Court Admin Portal</h2></div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

export default Header;
