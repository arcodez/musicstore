import React from 'react'
import Footer from './Footer'
import MenuBar from './MenuBar'

function Layout({children}) {
    return (
        <>
        <MenuBar />
            {children}
        <Footer />
        </>
    )
}

export default Layout
