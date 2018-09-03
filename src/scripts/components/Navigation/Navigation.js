import React from 'react';
import styles from './Navigation.scss';

class Navigation extends React.Component {
    render() {
        const links = [
            {name: 'Stories', href: '#' },
            {name: 'Events', href: '#' },
            {name: 'Places', href: '#' },
            {name: 'Boards', href: '#' }
        ];

        const linkItems = links.map((link, i) =>
            <li className={styles.listItem} key={i}>
                <a href={ link.href } className={styles.listLink}>{ link.name }</a>
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
