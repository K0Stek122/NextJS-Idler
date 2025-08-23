'use client';
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Game = {
    gold: number;
    goldPerSecond: number;
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
            lastTickAt: Date.now(),
            addGold: (amnt) => set({gold: get().gold + amnt}),
            setGold: (amnt) => set({gold: amnt}),
            tick: () => {
                const now = Date.now();
                const state = get();
                const dt = Math.max(0, Math.floor((now - get().lastTickAt) / 1000));
                if (dt > 0) {
                    const goldPerSecond = 1;
                    const earnedGold = dt * goldPerSecond;

                    const newGold = state.gold + earnedGold;
                    if (!isNaN(newGold)) {
                        set({ gold: newGold });
                    }
                }
            },
        }),
        { name: "idle-game" }
    )
);