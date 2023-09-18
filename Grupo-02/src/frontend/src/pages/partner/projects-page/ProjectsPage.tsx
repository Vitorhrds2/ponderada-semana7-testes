import React, { useState } from 'react';
import ProjectCard from '../components/IniciativeCard';
import TextInput from '../components/TextInput';
import { Menu, Transition } from '@headlessui/react';

const statusType = ['em espera', 'em andamento', 'concluído'];

const projects = [
  {
    title: 'Projeto 1',
    description: 'Description of Projeto 1',
    status: 1,
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    status: 2,
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    status: 0,
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4',
    status: 0,
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do Projeto 5',
    status: 1,
  },
  {
    title: 'Projeto 6',
    description: 'Descrição do Projeto 6',
    status: 2,
  },
  {
    title: 'Projeto 7',
    description: 'Descrição do Projeto 7',
    status: 1,
  },
  {
    title: 'Projeto 8',
    description: 'Descrição do Projeto 8',
    status: 0,
  },
  {
    title: 'Projeto 9',
    description: 'Descrição do Projeto 9',
    status: 2,
  },
];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState(''); // Estado para rastrear a barra de pesquisa

  // Função para filtrar os projetos com base no filtro atual e na pesquisa
  const filteredProjects = projects.filter(
    project =>
      (filter === 'all' || project.status === parseInt(filter)) && // Filtro por status
      (searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase())) // Pesquisa por título
  );

  return (
    <div className="flex items-center drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] justify-center flex-col h-full w-full">
      <div className="m-8 p-8 rounded bg-white">
        <div className="mb-4">
          <TextInput
            label="Pesquisar"
            id="search"
            placeholder="Digite para pesquisar..."
            onChange={event => setSearchQuery(event.target.value)}
          />
        </div>
        <div className="mb-4 space-x-2">
        <Menu>
        <Menu.Button className="ml-[93%] py-1 p-4 rounded bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 flex items-center">
            <span className="text-gray-500 mr-1 text-sm">Filtro</span>

            <img src="/src/assets/icons/dropdownIcon.svg" />

          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex items-center">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('all')}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Todos
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('0')}
                      className={`${
                        active ? 'bg-gray-100 text-yellow-600' : 'text-yellow-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Em espera
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('1')}
                      className={`${
                        active ? 'bg-gray-100 text-blue-600' : 'text-blue-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Em andamento
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter('2')}
                      className={`${
                        active ? 'bg-gray-100 text-green-600' : 'text-green-500'
                      } block px-4 py-2 text-sm w-full text-left`}
                    >
                      Concluído
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              status={statusType[project.status]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;