import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCardStore } from "../../../stores/CardStore";

export default function InitiativeDetails() {
  const { id } = useParams<{ id: string }>();
  const initiative = useCardStore((state) =>
    state.initiativeData.find((init) => init.id === id)
  );

  const [selectedInitiative, setSelectedInitiative] = useState("");
  const navigate = useNavigate();

  // const handleSave = () => {
  //   // Lógica para salvar a alocação do projeto com o módulo selecionado
  //   // ...
  // };

  if (!initiative) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p>Iniciativa não encontrada.</p>
        <Link to="/initiatives">
          <button
            className="px-0 py-1 bg-red-500 text-white rounded"
            style={{ marginTop: "20px" }}
          >
            Voltar para a lista de iniciativas
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex border-2 border-black p-4 gap-4">
        {/* Lado Esquerdo */}
        <div className="w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Name: {initiative.initiativeName}
            </h2>
            <p className="text-sm">Contato: {initiative.scope}</p>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Descrição Detalhada:</h2>
            <p className="text-sm">{initiative.scope}</p>
          </div>

          <div className="mb-2">
            <label className="block font-semibold">Selecione um Módulo:</label>
            <select
              className="border border-gray-300 rounded-md p-1 w-full"
              value={selectedInitiative}
              onChange={(e) => setSelectedInitiative(e.target.value)}
              placeholder="Selecione..."
              required
            >
              <option></option>
              <option value="webApp">Web App </option>
              <option value="predictModel">Modelo Preditivo</option>
              <option value="iotApplcation">Aplicação IOT</option>
              <option value="graphOtimization">Otimização com Grafos</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => navigate("/initiatives")}
            >
              Cancelar
            </button>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded"
              onClick={() => navigate('/initiatives')}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useCardStore } from "../../../stores/CardStore";

// export default function InitiativeDetails() {
//   const { id } = useParams<{ id: string }>();
//   const initiative = useCardStore((state) =>
//     state.initiativeData.find((init) => init.id === id)
//   );

//   const [selectedInitiative, setSelectedInitiative] = useState("");
//   const navigate = useNavigate();

//   // const handleSave = () => {
//   //   // Lógica para salvar a alocação do projeto com o módulo selecionado
//   //   // ...
//   // };

//   if (!initiative) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <p>Iniciativa não encontrada.</p>
//         <Link to="/initiatives">
//           <button
//             className="px-0 py-1 bg-red-500 text-white rounded"
//             style={{ marginTop: "20px" }}
//           >
//             Voltar para a lista de iniciativas
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex border-2 border-black p-4 gap-4">
//         {/* Lado Esquerdo */}
//         <div className="w-1/2">
//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">
//               Empresa: {initiative.name}
//             </h2>
//             <p className="text-sm">Contato: {initiative.contact}</p>
//           </div>
//         </div>

//         {/* Lado Direito */}
//         <div className="w-1/2">
//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">Descrição Detalhada:</h2>
//             <p className="text-sm">{initiative.description}</p>
//           </div>

//           <div className="mb-2">
//             <label className="block font-semibold">Selecione um Módulo:</label>
//             <select
//               className="border border-gray-300 rounded-md p-1 w-full"
//               value={selectedInitiative}
//               onChange={(e) => setSelectedInitiative(e.target.value)}
//               placeholder="Selecione..."
//               required
//             >
//               <option></option>
//               <option value="webApp">Web App </option>
//               <option value="predictModel">Modelo Preditivo</option>
//               <option value="iotApplcation">Aplicação IOT</option>
//               <option value="graphOtimization">Otimização com Grafos</option>
//             </select>
//           </div>

//           <div className="flex justify-between">
//             <button
//               className="px-2 py-1 bg-red-500 text-white rounded"
//               onClick={() => navigate("/initiatives")}
//             >
//               Cancelar
//             </button>
//             <button
//               className="px-2 py-1 bg-green-500 text-white rounded"
//               onClick={() => navigate('/initiatives')}
//             >
//               Salvar
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
