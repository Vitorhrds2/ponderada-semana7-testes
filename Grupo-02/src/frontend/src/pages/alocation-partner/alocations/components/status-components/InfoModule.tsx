import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import ButtonGroup from './ButtonGroup';
import FullHeightCard from './FullHeightCard';
import { fetchModules } from '../../../../../api/services/fetch-Modules';
import { ModuleEntity } from '../../../../../api/entities/module-entity';

const InfoModule: React.FC = () => {
  const [moduleData, setModuleData] = useState<ModuleEntity[]>([]);

  useEffect(() => {
    // Use a função fetchModules para obter os dados e atualizar o estado quando os dados estiverem disponíveis
    fetchModules().then((data) => {
      setModuleData(data);
    });
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez, após a montagem do componente

  return (
    <div className="overflow-auto relative z-[-1] grid flex-col rounded-xl justify-center items-center h-max bg-gray-100 shadow-xl p-8">
      {/* <Timeline minEvents={5} placeholder>
        {modulesMockData.map((module, index) => (
          <TimelineEvent
            key={index}
            icon={FaRegFileAlt}
            title={module.moduleName}
            subtitle={module.createdAt.toLocaleDateString()} // Certifique-se de que createdAt seja uma data válida
          />
        ))}
      </Timeline> */}

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="flex flex-grid justify-center items-center gap-5 w-full p-4">
        {/* Passe os dados para o componente InfoCard após a obtenção dos dados */}
        <InfoCard moduleData={moduleData} />
      </div>

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="flex justify-center w-full p-4">
        <ButtonGroup />
      </div>

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="w-full p-4">
        <FullHeightCard />
      </div>
    </div>
  );
};

export default InfoModule;







// // App.tsx
// import React from 'react';
// import InfoCard from './InfoCard';
// import ButtonGroup from './ButtonGroup';
// import FullHeightCard from './FullHeightCard';
// // import { useCardStore } from '../../../../../stores/ModuleCardStore';
// import { fetchModules } from '../../../../../api/services/fetch-Modules';
// // import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'


// const InfoModule: React.FC = () => {
//   // Use o primeiro item do array de mock data
//   const firstModule = fetchModules;

//   return (
//     <div className="overflow-auto relative z-[-1] grid flex-col rounded-xl justify-center items-center h-max bg-gray-100 shadow-xl p-8">
//       {/* <Timeline minEvents={5} placeholder>
//         {modulesMockData.map((module, index) => (
//           <TimelineEvent
//             key={index}
//             icon={FaRegFileAlt}
//             title={module.moduleName}
//             subtitle={module.createdAt.toLocaleDateString()} // Certifique-se de que createdAt seja uma data válida
//           />
//         ))}
//       </Timeline> */}

//       <hr className="w-[90%] border-t border-gray-300 my-4" />
//       <div className="flex flex-grid justify-center items-center gap-5 w-full p-4">
//         <InfoCard
//           beginData={firstModule.beginData}
//           endDate={firstModule.endDate}
//           responsible={firstModule.responsible}
//           phone={firstModule.phone}
//           email={firstModule.email}
//         />
//       </div>

//       <hr className="w-[90%] border-t border-gray-300 my-4" />
//       <div className="flex justify-center w-full p-4">
//         <ButtonGroup />
//       </div>

//       <hr className="w-[90%] border-t border-gray-300 my-4" />
//       <div className="w-full p-4">
//         <FullHeightCard />
//       </div>
//     </div>
//   );
// };

// export default InfoModule;