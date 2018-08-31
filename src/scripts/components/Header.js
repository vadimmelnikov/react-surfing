import React from "react";
import styles from "./Header.scss";
import Navigation from "./Navigation";
import logo from "../../img/logo.png";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className={styles.header}>
                    <ul className={styles.grid}>
                        <li className={styles.gridItem}>
                            <a href="#" className={styles.logo}>
                                <img src={logo} alt="logo" width="16"/>
                            </a>
                        </li>
                        <li className={styles.gridItem}>
                            <Navigation/>
                        </li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;
