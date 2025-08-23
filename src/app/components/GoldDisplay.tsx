'use client';
import React from 'react';

interface GoldDisplayProps {
    goldAmount: number;
}

const GoldDisplay: React.FC<GoldDisplayProps> = ({ goldAmount }) => {
    return (
        <li className="relative group pl-24">Gold: {goldAmount}g</li>
    );
};

export default GoldDisplay;