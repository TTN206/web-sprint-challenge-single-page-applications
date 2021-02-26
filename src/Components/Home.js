import React from "react";
import Header from "./Header";
import Body from "./HomePage";
import Footer from "./Footer";

export default function Home ( props ) {
    return (
        <div className = "webpage-div">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}