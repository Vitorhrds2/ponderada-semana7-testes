import { Link } from 'react-router-dom';
import { useCardStore } from '../../../stores/CardStore';
import ProjectCard from '../../../components/ProjectCard';
// import approved from '../../../assets/icons/approvedIniciative.svg';
// import underAnalysis from '../../../assets/icons/analysisIniciative.svg';
// import developmentIniciative from '../../../assets/icons/developmentIniciative.svg';
// import denied from  '../../../assets/icons/denied.svg';

export default function InitiativeCard() {
  const filteredData = useCardStore((state) => state.filteredData);

  return (
    <div className="bg-white rounded-lg border drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] p-6"> 
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-12">
      {filteredData.map((initiative) => (
        <Link to={`/initiatives/${initiative.id}`} key={initiative.id} className="hover:cursor-pointer">
          <ProjectCard
            key={initiative.initiativeName}
            title={initiative.initiativeName}
            description={initiative.partnerId}
            status={initiative.createdAt}
          />
          {/* <div className="mt-5">
              {initiative.status === 'approved' && <img src={approved} alt="Approved" />}
              {initiative.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
              {initiative.status === 'denied' && <img src={denied} alt="Denied" />}
              {initiative.status === 'underDevelopment' && <img src={developmentIniciative} alt="underDevelopment" />}
            </div> */}
        </Link>
      ))}
    </div></div>


  );
}



// import { Link } from 'react-router-dom';
// import { useCardStore } from '../../../stores/CardStore';
// import approved from '../../../assets/icons/approvedinitiative.svg';
// import underAnalysis from '../../../assets/icons/analysisinitiative.svg';
// import developmentinitiative from '../../../assets/icons/developmentinitiative.svg';
// import denied from  '../../../assets/icons/denied.svg';

// export default function InitiativeCard() {
//   const filteredData = useCardStore((state) => state.filteredData);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {filteredData.map((initiative) => (
//         <Link to={`/initiatives/${initiative.id}`} key={initiative.id} className="hover:cursor-pointer">
//           <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center">
//             <h3 className="text-lg mb-5">{initiative.name}</h3>
//             <div className="mt-5">
//               {initiative.status === 'approved' && <img src={approved} alt="Approved" />}
//               {initiative.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
//               {initiative.status === 'denied' && <img src={denied} alt="Denied" />}
//               {initiative.status === 'underDevelopment' && <img src={developmentinitiative} alt="underDevelopment" />}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
