'use client';

import React from 'react';
import ListItem from './ListItem';
import { useGame } from '@/stores/useGame';
import GoldDisplay from './GoldDisplay';

const Navbar: React.FC = () => {
    const gold = useGame((s) => s.gold);
    return (
        <div className="flex flex-row p-6 border-b border-b-gray-400 border-b-2">
            <ul className="flex flex-row p-0 space-x-6">
                <ListItem text="Cave" href="/" />
                <ListItem text="Upgrades" href="/upgrades"/>
                <GoldDisplay goldAmount={gold}/>
            </ul>
        </div>
    );
};

export default Navbar;