import './stylesheets/menu.css'
import { useState } from "react";

const Menu = () => {
    const [isMenuOn, setIsMenuOn] = useState<boolean>(false);

    function menuSelected() {
        setIsMenuOn(!isMenuOn);
        console.log("Menu Clicked!");
    }

    function test(){
        console.log("test");
    }

    return(
        <div className={`menu`} onClick={menuSelected}>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
        </div>
    )
}

export default Menu;