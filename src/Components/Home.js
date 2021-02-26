import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";

export default function Home ( props ) {
    return (
        <div className = "webpage-div">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}