import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"


const Sidebar = props => {

    const ref = useRef()
    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
    useEffect(() => {
        const pathName = '/home'

        const initMenu = () => {
            new MetisMenu("#side-menu")
            let matchingMenuItem = null
            const ul = document.getElementById("side-menu")
            const items = ul.getElementsByTagName("a")
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i]
                    break
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }
        initMenu()
    }, [])

    useEffect(() => {
        ref.current.recalculate()
    })

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300
            }
        }
    }

    function activateParentDropdown(item) {
        item.classList.add("active")
        const parent = item.parentElement
        const parent2El = parent.childNodes[1]
        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show")
        }

        if (parent) {
            parent.classList.add("mm-active")
            const parent2 = parent.parentElement

            if (parent2) {
                parent2.classList.add("mm-show") // ul tag

                const parent3 = parent2.parentElement // li tag

                if (parent3) {
                    parent3.classList.add("mm-active") // li
                    parent3.childNodes[0].classList.add("mm-active") //a
                    const parent4 = parent3.parentElement // ul
                    if (parent4) {
                        parent4.classList.add("mm-show") // ul
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show") // li
                            parent5.childNodes[0].classList.add("mm-active") // a tag
                        }
                    }
                }
            }
            scrollElement(item);
            return false
        }
        scrollElement(item);
        return false
    }

    return (
        <React.Fragment>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
                        <div id="sidebar-menu">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title">Menu</li>
                                <li>
                                    <Link to="/#" className="has-arrow waves-effect">
                                        <i className="bx bx-store"></i>
                                        <span>Ecommerce</span>
                                    </Link>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li>
                                            <Link to="/ecommerce-products">Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-product-detail">
                                                Product Detail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-orders">Orders</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-customers">Customers</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-cart">Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-checkout">Checkout</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-shops">Shops</Link>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce-add-product">
                                                Add Product
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;