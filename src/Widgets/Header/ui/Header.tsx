import React from 'react';
import Link from 'next/link';
import { Nav } from '@/Entities/Nav';
import { AuthNav } from '@/Entities/AuthNav';

const Header = () => {
    return (
        <div className="p-2 flex justify-between">
            <Link href='/'>
                Microtasks
            </Link>
            <div className="flex">
                <Nav/>
                <AuthNav/>
            </div>
        </div>
    );
};

export default Header;