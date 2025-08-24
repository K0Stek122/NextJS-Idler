'use client';

import { useGame } from "@/stores/useGame";
import CaveCard from "./components/CaveCard";
import Navbar from "./components/Navbar";
import * as globals from "./globals";
const { BACKGROUND_STYLES, BACKDROP_STYLES } = globals;

export default function Home() {

    const gold = useGame(s => s.gold);

    return (
        <div className={BACKGROUND_STYLES}>
            <div className={BACKDROP_STYLES}>
                <Navbar />
                <CaveCard
                    oreName="Bronze"
                    timeToMine={globals.BRONZE_TIME}
                    locked={false}
                    goldOnMine={globals.BRONZE_GOLD}
                    unlockAtGold={globals.BRONZE_UNLOCK}
                    minePerSecond={0} />
                <CaveCard
                    oreName="Copper"
                    timeToMine={globals.COPPER_TIME}
                    goldOnMine={globals.COPPER_GOLD}
                    locked={gold <= globals.COPPER_UNLOCK}
                    unlockAtGold={1000}
                    minePerSecond={0} />
                <CaveCard 
                    oreName="Iron"
                    timeToMine={globals.IRON_TIME}
                    goldOnMine={globals.IRON_GOLD}
                    locked={gold <= globals.IRON_UNLOCK}
                    unlockAtGold={globals.IRON_UNLOCK}
                    minePerSecond={0} />
                <CaveCard 
                    oreName="Gold"
                    timeToMine={globals.GOLD_TIME}
                    goldOnMine={globals.GOLD_GOLD}
                    locked={gold <= globals.GOLD_UNLOCK}
                    unlockAtGold={5000}
                    minePerSecond={0} />
            </div>
        </div>
  );
}
