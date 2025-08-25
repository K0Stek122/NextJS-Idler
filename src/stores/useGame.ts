'use client';
import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as globals from "../app/globals";

type Game = {
    gold: number;
    goldPerSecond: number;

    bronzePerSecond: number;
    copperPerSecond: number;
    ironPerSecond: number,
    goldOrePerSecond: number,

    setBronzePerSecond: (amnt: number) => void;    
    setCopperPerSecond: (amnt: number) => void;
    setIronPerSecond: (amnt: number) => void;
    setGoldPerSecond: (amnt: number) => void;    

    lastTickAt: number;
    addGold: (amnt: number) => void;
    tick: () => void;
    setGold: (amnt: number) => void;
};

export const useGame = create<Game>()(
    persist(
        (set, get) => ({
            gold: 0,
            goldPerSecond: 0,

            bronzePerSecond: 0,
            copperPerSecond: 0,
            ironPerSecond: 0,
            goldOrePerSecond: 0,

            setBronzePerSecond: (amnt) => set({bronze: get().bronzePerSecond + amnt}),
            setCopperPerSecond: (amnt) => set({bronze: get().bronzePerSecond + amnt}),
            setIronPerSecond: (amnt) => set({bronze: get().bronzePerSecond + amnt}),
            setGoldPerSecond: (amnt) => set({bronze: get().bronzePerSecond + amnt}),


            lastTickAt: Date.now(),
            addGold: (amnt) => set({gold: get().gold + amnt}),
            setGold: (amnt) => set({gold: amnt}),
            tick: () => {
                const now = Date.now();
                const state = get();
                const dt = Math.max(0, Math.floor((now - get().lastTickAt) / 1000));
                if (dt > 0) {
                    const earnedBronze = dt * state.bronzePerSecond * globals.BRONZE_GOLD;
                    const earnedCopper = dt * state.copperPerSecond * globals.COPPER_GOLD;
                    const earnedIron = dt * state.ironPerSecond * globals.IRON_GOLD;
                    const earnedGold = dt * state.goldOrePerSecond * globals.GOLD_GOLD;

                    const newGold = state.gold + earnedBronze + earnedCopper + earnedIron+earnedGold;
                    if (!isNaN(newGold)) {
                        set({ gold: newGold });
                    }
                }
            },
        }),
        { name: "idle-game" }
    )
);