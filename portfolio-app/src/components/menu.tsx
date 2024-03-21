import './stylesheets/menu.css'
import { useState } from "react";

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
            {isMenuOn && (
                    buttons.map((button, index) => (
                        <ul className={`button-${index}`} key={index.toString()}>{button}</ul>
                    ))
                )
            }
            </div>
        </div>
        
    )
}

export default Menu;