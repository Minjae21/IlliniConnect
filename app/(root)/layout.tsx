import React from 'react'
import NavBar from '@/components/main/navbar/NavBar'
import Main from './main/page'

type Props = React.PropsWithChildren<{}>

const Layout = ({ children }
    : Props) => {
  return (
    <>
    <NavBar>
    {children}
    </NavBar>
    <Main />
    </>
  )
}

export default Layout;