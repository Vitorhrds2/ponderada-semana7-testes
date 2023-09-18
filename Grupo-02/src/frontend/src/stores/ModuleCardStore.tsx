import { create } from "zustand";
import { ModuleEntity } from "../api/entities/module-entity";

interface CardStore {
  moduleData: ModuleEntity[];
  filteredData: ModuleEntity[];
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
  setModuleData: (data: ModuleEntity[]) => void;
  setFilteredData: (data: ModuleEntity[]) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  moduleData: [],
  filteredData: [],
  searchTerm: "",
  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm }),
  setModuleData: (data) => set({ moduleData: data }),
  setFilteredData: (data) => set({ filteredData: data }),
}));
