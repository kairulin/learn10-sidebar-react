import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { SLayout, SMain } from './style'

const Layout = ({ children }) => {
    return (
        <SLayout>
            <Sidebar />
            <SMain>{children}</SMain>
        </SLayout>
    )
}

export default Layout