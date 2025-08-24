'use client';
import React, { useState } from 'react';
import { useGame } from '@/stores/useGame';

interface CaveCardProps {
    oreName?: string,
    timeToMine: number, //Time in miliseconds to mine
    goldOnMine: number,
    minePerSecond: number,
    locked: boolean,
    unlockAtGold: number,
}

const CaveCard: React.FC<CaveCardProps> = ({
    oreName = "Iron",
    timeToMine = 2000,
    goldOnMine = 0,
    minePerSecond = 0,
    locked = false,
    unlockAtGold = 0,
}) => {
    const [flash, setFlash] = useState(false);
    const gold = useGame((s) => s.gold);
    const addGold = useGame(s => s.addGold);

    const handleClick = () => {
        if (!flash) {
            setFlash(true);
            setTimeout(() => setFlash(false), timeToMine);
            addGold(goldOnMine);
        }
    };

    return !locked ?(
        <div className={`
            ${flash ? 'bg-yellow-600' : ''}
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
            m-5
            cursor-pointer`} onClick={handleClick}>
        
            <h1 className="text-xl underline p-2 overflow-clip">Ore: {oreName}</h1>
            <h2 className="text-md p-0 overflow-clip">Time: {(timeToMine / 1000).toFixed(2)}s</h2>
            <h2 className="text-md p-0 overflow-clip">Worth: {goldOnMine}g</h2>
            <h2 className="text-md p-0 overflow-clip">{oreName} Per Second: 0</h2>

        </div>
    ) : (
        <div className={`
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
            m-5
            cursor-pointer`}>
            
            <h1 className="text-2xl text-gray-900 underline p-2 overflow-clip">Ore: {oreName}</h1>
            <h2 className="text-xl text-gray-900 p-0 overflow-clip">Unlock at: {unlockAtGold}g</h2>
        </div>
    );
};

export default CaveCard;