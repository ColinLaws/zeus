import { create } from 'zustand';

// Used for persisting the user's zip code and location preferences.
export interface LocationStore {
    zipCode: string;
    useGps: boolean;
    setUseGps: (useGps: boolean) => void;
    setLocation: (zipCode: string) => void;
    clearLocation: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
    // Default value of 90210
    zipCode: "90210",
    useGps: false,
    setUseGps: (useGps: boolean) => set((state: LocationStore) => ({...state, useGps })),
    setLocation: (zipCode: string) => set((state: LocationStore) => ({ ...state, zipCode })),
    clearLocation: () => set({ zipCode: "" })
}));
