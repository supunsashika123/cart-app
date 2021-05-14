import React, { useEffect, useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { httpGetRequest } from "../helpers/networkRequestHelper"
import { AppContext } from '../store';

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const { state, setState } = useContext(AppContext)


  console.log(state)
  useEffect(() => {
    let token = localStorage.getItem("TOKEN")

    if (isAuthProtected && !token) {
      window.location.replace("/login")

      return
    }

    if (isAuthProtected) {
      getUserData()
    }
  }, [])

  const getUserData = async () => {
    let res = await httpGetRequest({
      url: "user/me"
    })

    setState({ user: res.data })
  }


  return (
    <Route
      {...rest}
      render={props => {

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}
export default Authmiddleware;
