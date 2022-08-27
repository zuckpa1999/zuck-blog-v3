import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./navbar"
import Social from './social'
import styled from "styled-components"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    // <div className="global-wrapper" data-is-root-path={isRootPath}>
    <div>
      <NavBar />
      <Wrapper className="global-wrapper">
        {/* <header className="global-header">{header}</header> */}

        <main>{children}</main>
        <Footer>
          <Social />
          © {new Date().getFullYear()}, zuck_pa
        </Footer>
        {/* </div> */}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`


export default Layout
