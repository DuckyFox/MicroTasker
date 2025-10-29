import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href='/tasks'>Tasks</Link>
            <Link href='/favorites'>Favourites</Link>
            <Link href='/tasks/create'>Create Task</Link>
        </nav>
    );
};

export default Nav;