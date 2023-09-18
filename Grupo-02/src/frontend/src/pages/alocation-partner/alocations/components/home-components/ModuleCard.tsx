import { Link } from 'react-router-dom';
import { useCardStore } from '../../../../../stores/ModuleCardStore';
import ModuleProjectCard from '../../../../../components/ModuleCard';
// import approved from '../../../assets/icons/approvedIniciative.svg';
// import underAnalysis from '../../../assets/icons/analysisIniciative.svg';
// import developmentIniciative from '../../../assets/icons/developmentIniciative.svg';
// import denied from  '../../../assets/icons/denied.svg';

export default function ModuleCard() {
  const filteredData = useCardStore((state) => state.filteredData);
  console.log(filteredData);


  return (
    <div className="bg-white rounded-lg border drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] p-6"> 
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-12">
      {filteredData.map((module) => (
        <Link to={`/alocation/${module.id}`} key={module.id} className="hover:cursor-pointer">
            <ModuleProjectCard
              key={module.moduleName}
              moduleName={module.moduleName}
              course = {module.courseCode}
              description={module.moduleName}
              status={module.status} 
            />
            {/* <div className="mt-5">
              {module.status === 'approved' && <img src={approved} alt="Approved" />}
              {module.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
              {module.status === 'denied' && <img src={denied} alt="Denied" />}
              {module.status === 'underDevelopment' && <img src={developmentIniciative} alt="underDevelopment" />}
            </div> */}
        </Link>
      ))}
    </div>
    </div>
  );
}



// import { Link } from 'react-router-dom';
// import { useCardStore } from '../../../stores/CardStore';
// import approved from '../../../assets/icons/approvedmodule.svg';
// import underAnalysis from '../../../assets/icons/analysismodule.svg';
// import developmentmodule from '../../../assets/icons/developmentmodule.svg';
// import denied from  '../../../assets/icons/denied.svg';

// export default function ModuleCard() {
//   const filteredData = useCardStore((state) => state.filteredData);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {filteredData.map((module) => (
//         <Link to={`/modules/${module.id}`} key={module.id} className="hover:cursor-pointer">
//           <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center">
//             <h3 className="text-lg mb-5">{module.name}</h3>
//             <div className="mt-5">
//               {module.status === 'approved' && <img src={approved} alt="Approved" />}
//               {module.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
//               {module.status === 'denied' && <img src={denied} alt="Denied" />}
//               {module.status === 'underDevelopment' && <img src={developmentmodule} alt="underDevelopment" />}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
