import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import InitiativeCard from "./components/InitiativeCard";
import { useCardStore } from "../../stores/CardStore";
import { fetchInitiatives } from "../../api/services/fetch-Initiatives";

export default function Initiatives() {
  const setInitiativeData = useCardStore((state) => state.setInitiativeData);
  const setFilteredData = useCardStore((state) => state.setFilteredData);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchInitiatives();
        setInitiativeData(data);
        setFilteredData(data); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setInitiativeData, setFilteredData]);

  return (
    <div>
      <SearchBar />
      <InitiativeCard />
    </div>
  );
}
