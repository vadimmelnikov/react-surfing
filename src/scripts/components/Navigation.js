import React from 'react';
import styles from './Navigation.scss';

class Navigation extends React.Component {
    render() {
        const links = {
            link1:{
                name: 'Stories',
                href: '#'
            },
            link2:{
                name: 'Events',
                href: '#'
            },
            link3:{
                name: 'Places',
                href: '#'
            },
            link4:{
                name: 'Boards',
                href: '#'
            }
        };
        // const link = ['Stories', 'Events', 'Places', 'Boards'];
        const linkItems = Object.keys(links).map((link, i) =>
            <li className={styles.listItem} key={i}>
                <a href={ links[link].href } className={styles.listLink}>{ links[link].name }</a>
            </li>
        );
        return (
            <React.Fragment>
                <nav className={styles.navigation}>
                    <ul className={styles.list}>
                        { linkItems }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;
