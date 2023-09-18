import { useEffect } from "react";
import SearchBar from "./alocations/components/home-components/SearchBar";
import ModuleCard from "./alocations/components/home-components/ModuleCard";
import { useCardStore } from "../../stores/ModuleCardStore";
import { fetchModules } from "../../api/services/fetch-Modules";

export default function Alocation() {
  const setModuleData = useCardStore((state) => state.setModuleData);
  const setFilteredData = useCardStore((state) => state.setFilteredData);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchModules();
        setModuleData(data);
        setFilteredData(data); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setModuleData, setFilteredData]);

  return (
    <div>
      <SearchBar />
      <ModuleCard />
    </div>
  );
}
