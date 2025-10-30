import React from 'react';
import Link from 'next/link';
import { Nav } from '@/Entities/Nav';
import { AuthNav } from '@/Entities/AuthNav';

const Header = () => {
    return (
        <div className="px-6 items-center flex justify-between h-[5vh] ">
            <Link href='/'>
                Microtasks
            </Link>
            <div className="flex gap-x-[20px]">
                <Nav/>
                <AuthNav/>
            </div>
        </div>
    );
};

export default Header;