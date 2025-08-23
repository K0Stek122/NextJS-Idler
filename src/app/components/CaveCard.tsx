'use client';
import React from 'react';

interface CaveCardProps {
    oreName?: string,
    timeToMine: number, //Time in miliseconds to mine
    goldOnMine: number,
}

const CaveCard: React.FC<CaveCardProps> = ({
    oreName = "Iron",
    timeToMine = 2000,
    goldOnMine = 0,
}) => {
    return (
        <div className="
            w-64
            h-40
            bg-gray-700
            shadow-2xl
            backdrop-blur-md
            rounded-2xl
            shadow-md
            flex
            flex-col
            items-center
            justify-center
            transform
            transition-transform
            hover:scale-105
            ease-in-out
            duration-300
            cursor-pointer">
        
        <h1 className="text-xl underline p-2 overflow-clip">Ore: {oreName}</h1>
        <h2 className="text-md p-0 overflow-clip">Time: {(timeToMine / 1000).toFixed(2)}s</h2>
        <h2 className="text-md p-0 overflow-clip">Worth: {goldOnMine}g</h2>

        </div>
    );
};

export default CaveCard;