'use client';
import { useGame } from '@/stores/useGame';
import React from 'react';

interface UpgradeCardProps {
    upgradeName: string,
    upgradeDescription: string,
    price: number,
}

const UpgradeCard: React.FC<UpgradeCardProps> = ({
    upgradeName = "None",
    upgradeDescription = "Does Nothing",
    price = 0,
}) => {

    const gold = useGame(s => s.gold);
    const setGold = useGame(s => s.setGold);

    const bronzePerSecond = useGame(s => s.bronzePerSecond);
    const copperPerSecond = useGame(s => s.copperPerSecond);
    const ironPerSecond = useGame(s => s.ironPerSecond);
    const goldPerSecond = useGame(s => s.goldOrePerSecond);

    const setBronzePerSecond = useGame(s => s.setBronzePerSecond);
    const setCopperPerSecond = useGame(s => s.setCopperPerSecond);
    const setIronPerSecond = useGame(s => s.setIronPerSecond);
    const setGoldPerSecond = useGame(s => s.setGoldPerSecond);

    const getPerSecond = () => {
        if (upgradeName === "Bronze Miner") {
            return bronzePerSecond;
        } else if (upgradeName === "Copper Miner") {
            return copperPerSecond;
        } else if (upgradeName === "Iron Miner") {
            return ironPerSecond;
        } else {
            return goldPerSecond;
        }
    }

    const handleClick = () => {
        if (gold < price) {
            return;
        }
        if (upgradeName === "Bronze Miner") {
            setBronzePerSecond(bronzePerSecond + 1);
        }
        else if (upgradeName === "Copper Miner") {
            setCopperPerSecond(copperPerSecond + 1);
        } else if (upgradeName === "Iron Miner") {
            setIronPerSecond(ironPerSecond + 1);
        } else if (upgradeName === "Gold Miner") {
            setGoldPerSecond(goldPerSecond + 1);
        }
        setGold(gold - price);
    };

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
            m-5
            cursor-pointer
            " onClick={handleClick}>
            
            <h1 className="text-xl underline p-2 overflow-clip">{upgradeName}</h1>
            <h2 className="text-md p-0 overflow-clip">{upgradeDescription}</h2>
            <h2 className="text-md p-0 overflow-clip">Price: {price}</h2>
            <h2 className="text-md p-0 overflow-clip">Bought {getPerSecond()} Times</h2>

        </div>
    );
};

export default UpgradeCard;