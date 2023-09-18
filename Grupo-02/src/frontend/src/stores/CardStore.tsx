import { create } from "zustand";
import { InitiativeEntity } from "../api/entities/Initiative-entity";

interface CardStore {
  initiativeData: InitiativeEntity[];
  filteredData: InitiativeEntity[];
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
  setInitiativeData: (data: InitiativeEntity[]) => void;
  setFilteredData: (data: InitiativeEntity[]) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  initiativeData: [],
  filteredData: [],
  searchTerm: "",
  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm }),
  setInitiativeData: (data) => set({ initiativeData: data }),
  setFilteredData: (data) => set({ filteredData: data }),
}));
