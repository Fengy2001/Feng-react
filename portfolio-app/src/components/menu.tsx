import './stylesheets/menu.css'
import { useState } from "react";

/*
* The hamburger menu used for lower width screens.
*/
interface Props {
    buttons: string[];
}

const Menu = ({buttons}:Props) => {
    const [isMenuOn, setIsMenuOn] = useState<boolean>(false);

    function menuSelected() {
        setIsMenuOn(!isMenuOn);
        console.log("Menu Clicked!");
    }

    return(
        <div>
            <div className={`menu ${isMenuOn ? 'menuOn' : 'menuOff'}`} onClick={menuSelected}>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
            <span className={`line ${isMenuOn ? 'lineOn' : 'lineOff'}`}></span>
        </div>
        <div className = {`sideNav ${isMenuOn ? 'sideNavOn' : 'sideNavOff'}`}>
            <div className="buttons">
            {isMenuOn && (
                    buttons.map((button, index) => (
                        <ul className={`button-${index}${isMenuOn ? 'On' : 'Off'}`} key={index.toString()}>{button}</ul>
                    ))
                )
            }
            </div>
            </div>
        </div>
        
    )
}

export default Menu;