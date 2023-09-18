import Dashboard from './components/Dashboard';
import { projects } from './components/data/projectsData';

export default function Home() {
  return (
    <div className=" w-[93%] items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <h1 className="text-2xl font-semibold mb-4">Visão Geral dos Projetos</h1>
        <Dashboard projects={projects} />
      </div>
    </div>
  );
}
