import React from 'react';
import Link from 'next/link';

const AuthNav = () => {
    return (
        <div>
            <Link href='/login'>Sing In</Link>
            <Link href='/registration'>Sign Up</Link>
        </div>
    );
};

export default AuthNav;