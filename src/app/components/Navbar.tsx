'use client';

import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row p-6 m-6">
            <ul className="flex flex-row p-10 space-x-6">
                <li className="relative cursor-pointer group">
                    <span className="hover:text-white">Cave</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer group">
                    <span className="hover:text-white">Upgrades</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;