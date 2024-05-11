import styles from './stylesheets/navbar.module.css';
import Menu from './menu'

/*
 * Navbar deals with the top and side navs such that it is a reactive experience for any window size.
 */
interface Props {
    className: string;
    buttons: string[];
}

const Navbar = ({className,buttons}:Props) => {
    return(
        <div>
            <div className={styles.menu}>
                <Menu buttons={buttons}/>
            </div>
        <nav className={`${styles.className} ${className}`}>
            {buttons.map((button,index)=> (
                <ul className={`${styles[`button-${index}`]}`} key={`${index}`} onClick={()=>navFunctions(index,buttons)}>{button}</ul>
            ))}
        </nav>
        </div>
    )
}

export function navFunctions(index: number, buttons: string[]) {
    console.log(buttons[index])
}

export default Navbar;