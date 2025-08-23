'use client';

import React from 'react';
import ListItem from './ListItem';

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row p-6 m-6">
            <ul className="flex flex-row p-10 space-x-6">
                <ListItem text="Cave" href="/" />
                <ListItem text="Upgrades" href="/upgrades"/>
            </ul>
        </div>
    );
};

export default Navbar;