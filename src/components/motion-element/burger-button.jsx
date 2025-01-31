import React, { useState } from "react";
import '../styles/motion-element/burger-button.css'

const BurgerButton = ({setMenuClass, setIsMenuClicked, isMenuClicked}) => {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <div>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </div>
    );
};

export default BurgerButton;