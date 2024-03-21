import styles from './stylesheets/navbar.module.css';
import Menu from './menu'

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
                <ul className={`${styles[`button-${index}`]}`} key={`${index}`}>{button}</ul>
            ))}
        </nav>
        </div>
    )
}

export default Navbar;