import React, { useState } from 'react';
import ProjectAllocationChart from './ProjectAllocationChart';
import ScatterPlotChart from './ScatterPlotChart';
import { useSpring, animated } from 'react-spring';

interface Project {
  id: number;
  projectName: string;
  partnerName: string;
  description: string;
  allocated: boolean;
  sector: string;
  stage: number;
  submitDate: Date;
}

interface DashboardProps {
  projects: Project[];
}

const Dashboard: React.FC<DashboardProps> = ({ projects }) => {
  const [chartVersion, setChartVersion] = useState<'allocated' | 'unallocated'>('allocated');
  const [showAll, setShowAll] = useState(false);
  
  const handleChartVersionChange = (version: 'allocated' | 'unallocated') => {
    setChartVersion(version);
  };

  const filteredProjects = chartVersion === 'allocated'
    ? projects.filter((project) => project.allocated)
    : projects.filter((project) => !project.allocated);

    const scatterDataAlocados = filteredProjects.map((project) => ({
      x: project.submitDate.getTime(),
      y: project.stage,
      sector: project.sector, 
      partnerName: project.partnerName,
    }));
    
    const scatterDataNaoAlocados = projects
      .filter((project) => !project.allocated)
      .map((project) => ({
        x: project.submitDate.getTime(),
        y: project.stage,
        sector: project.sector, 
        partnerName: project.partnerName,
      }));
    

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  
  const buttonAnimation = useSpring({
    transform: `scale(${showAll ? 1 : 0.95})`,
    config: { tension: 300, friction: 21 },
  });

  const toggleShowAllAndScroll = () => {
    setShowAll(!showAll);
    const projectListAnchor = document.getElementById('project-list-anchor');

    if (projectListAnchor) {
      projectListAnchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSectorBadgeClass = (sector: string) => {
    switch (sector) {
      case 'ONG':
        return 'bg-blue-500 text-white';
      case 'Governamental':
        return 'bg-green-500 text-white';
      case 'Privado':
        return 'bg-purple-700 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  

  const renderProject = (project: Project) => (
    <div key={project.projectName} className="flex justify-between gap-x-6 py-5 border-b border-gray-900">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{project.partnerName}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{project.description}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className={`text-sm rounded leading-6 text-gray-900 ${getSectorBadgeClass(project.sector)}`}>
          <span className="px-2 py-1 rounded-md">{project.sector}</span>
        </p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Próxima reunião{' '}
          <time dateTime={project.submitDate.toString()}>{project.submitDate.toLocaleDateString()}</time>
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col flex-grow items-center w-full">
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center justify-center mb-4">
        <button
          className={`group flex items-center p-2 rounded-md bg-gray-200 hover:bg-green-500 hover:text-white transition-all transform ${
            chartVersion === 'allocated' ? 'bg-green-500 text-white scale-105' : ''
          }`}
          onClick={() => handleChartVersionChange('allocated')}
        >
          <span className="mr-2 text-sm">Alocados</span>
          {chartVersion === 'allocated' && (
            <span className="bg-green-600 text-white rounded-full px-2 py-1 text-sm">Atual</span>
          )}
        </button>
        <button
          className={`group flex items-center p-2 rounded-md bg-gray-200 hover:bg-red-500 hover:text-white transition-all transform ${
            chartVersion === 'unallocated' ? 'bg-red-500 text-white scale-105' : ''
          }`}
          onClick={() => handleChartVersionChange('unallocated')}
        >
          <span className="mr-2 text-sm">Não Alocados</span>
          {chartVersion === 'unallocated' && (
            <span className="bg-red-600 text-white rounded-full px-2 py-1 text-sm">Atual</span>
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <ProjectAllocationChart filteredProjects={filteredProjects} />
        <ScatterPlotChart data={chartVersion === 'allocated' ? scatterDataAlocados : scatterDataNaoAlocados} />
      </div>

      <h2 className="text-xl font-semibold my-4">
        {showAll ? 'Todos os Projetos:' : 'Últimos Projetos:'}
      </h2>
      <div className="flex flex-col w-full space-y-4">
        <animated.div className="space-y-2" style={{ transform: buttonAnimation.transform }}>
          {showAll ? filteredProjects.map(renderProject) : visibleProjects.map(renderProject)}
        </animated.div>
        <button
          className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors duration-300 ease-in-out"
          onClick={toggleShowAllAndScroll}
        >
          {showAll ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
