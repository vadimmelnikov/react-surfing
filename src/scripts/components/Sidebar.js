import React from "react";
import styles from "./Sidebar.scss";
import twitter from "../../img/twitter.png";
import tumblr from "../../img/tumblr.png";
import vimeo from "../../img/vimeo.png";

class Sidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <aside className={styles.sidebar}>
                    <ul className={styles.grid}>
                        <li className={styles.gridItem}>
                            <span className={styles.vertical}>First Surfing Magazine</span>
                        </li>
                        <li className={styles.gridItem}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <a href="#" target="_blank" className={styles.listLink}>
                                        <img src={tumblr} alt="tumblr" width="13"/>
                                    </a>
                                </li>
                                <li className={styles.listItem}>
                                    <a href="#" target="_blank" className={styles.listLink}>
                                        <img src={twitter} alt="twitter" width="18"/>
                                    </a>
                                </li>
                                <li className={styles.listItem}>
                                    <a href="#" target="_blank" className={styles.listLink}>
                                        <img src={vimeo} alt="vimeo" width="18"/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </React.Fragment>
        )
    }
}

export default Sidebar;
