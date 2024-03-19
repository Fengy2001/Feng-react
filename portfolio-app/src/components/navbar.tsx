import styles from './navbar.module.css';

interface Props {
    className: string;
    buttons: string[];
}

const Navbar = ({className,buttons}:Props) => {
    return(
        <div>
        <nav className={`${styles.className} ${className}`}>
            {buttons.map((button,index)=> (
                <ul className={`${styles[`button-${index}`]}`} key={`${index}`}>{button}</ul>
            ))}
        </nav>
        </div>
    )
}

export default Navbar;