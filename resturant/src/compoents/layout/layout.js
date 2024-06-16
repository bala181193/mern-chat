import React from "react";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
    console.log("...children", children)
    return (
        <>
            <Header />
            <div>{children}
            </div>
            <Footer />
        </>

    )
}
export default Layout