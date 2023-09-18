import React from 'react';

interface ProjectCardProps {
  projectName: string;
  partnerName: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  partnerName,
  description,
}) => {
  return (

      <div className="m-4 w-max h-fit bg-[#D9D9D9] drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 rounded-[10px] p-4" >
      <h2 className="text-gray-700 font-bold mb-2">{projectName}</h2>
      <div className="mb-2">
        <span className={`text-white text-xs px-2 py-1 rounded ${partnerName}`}>
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
    </div>
  );
};

export default ProjectCard;