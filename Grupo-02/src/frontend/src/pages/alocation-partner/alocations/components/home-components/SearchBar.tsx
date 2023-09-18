import { useState } from "react";
import { useCardStore } from "../../../../../stores/ModuleCardStore";

export default function SearchBar() {
  const setFilteredData = useCardStore((state) => state.setFilteredData);
  const moduleData = useCardStore((state) => state.moduleData);
 
  const [selectedStatus, setSelectedStatus] = useState("todos");

  const handleStatusChange = (newStatus: string | ((prevState: string) => string)) => {
    setSelectedStatus(newStatus);

    if (newStatus === "todos") {
      setFilteredData(moduleData);
    } else {
      const filteredModules = moduleData.filter(
        (module) => module.status === newStatus
      );
      setFilteredData(filteredModules);
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
