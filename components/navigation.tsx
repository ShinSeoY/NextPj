'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../style/navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link> {path === '/' ? ':)' : ''}
                </li>
                <li>
                    <Link href="/board">Board</Link> {path === '/board' ? ':)' : ''}
                </li>
            </ul>
        </nav>
    );
}
