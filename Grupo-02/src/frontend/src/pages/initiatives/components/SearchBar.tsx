import { useState } from "react";
import { useCardStore } from "../../../stores/CardStore";

export default function SearchBar() {
  const setFilteredData = useCardStore((state) => state.setFilteredData);
  const initiativeData = useCardStore((state) => state.initiativeData);

  const [selectedStatus, setSelectedStatus] = useState("todos");

  const handleStatusChange = (newStatus: string | ((prevState: string) => string)) => {
    setSelectedStatus(newStatus);

    if (newStatus === "todos") {
      setFilteredData(initiativeData);
    } else {
      const filteredInitiatives = initiativeData.filter(
        (initiative) => initiative.status === newStatus
      );
      setFilteredData(filteredInitiatives);
    }
  };

  return (
    <div className="mb-4">
      <select
        className="border border-gray-300 rounded-md p-2"
        onChange={(e) => handleStatusChange(e.target.value)}
        value={selectedStatus}
      >
        <option value="todos">Todos</option>
        <option value="approved">Aprovado</option>
        <option value="underAnalysis">Para análise</option>
        <option value="underDevelopment">Desenvolvimento</option>
        <option value="denied">Negado</option>
      </select>
    </div>
  );
}
