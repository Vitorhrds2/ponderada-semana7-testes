import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useCardStore } from '../../../../stores/CardStore';

interface BreadcrumbsProps {
    path: string; // Propriedade para o caminho específico da página
  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const initiative = useCardStore((state) =>
    state.initiativeData.find((init) => init.id === id)
  );

  const [visitedPages, setVisitedPages] = useState<string[]>([]);

  useEffect(() => {
    // Adicione o caminho atual à lista visitedPages toda vez que o Breadcrumbs for renderizado
    if (!visitedPages.includes(location.pathname)) {
      setVisitedPages([...visitedPages, location.pathname]);
    }
  }, [location.pathname, visitedPages]);

  useEffect(() => {
    // Limpe a lista de visitedPages sempre que houver uma mudança na propriedade id
    setVisitedPages([]);
  }, [id]);

  const pages = [
    { path: '/', label: 'Página Inicial' },
    { path: '/partner-registration', label: 'Registro de Parceiro' },
    { path: '/info-initiative', label: 'Info Iniciativa' },
    { path: '/courses', label: 'Cursos' },
    { path: '/alocation', label: 'Alocação' },
    { path: '/initiatives', label: 'Iniciativas' },
    { path: `'/initiatives/${initiative?.id}'`, label: `${initiative?.name}` },
  ];

  const currentPage = pages.find(page => page.path === location.pathname);

  const abbreviatePageLabel = (label: string) => {
    const maxLength = 20;
    if (label.length > maxLength) {
      return label.substr(0, maxLength) + '...';
    }
    return label;
  };

  return (
    <div className="w-max p-4">
        <div className="bg-white p-4 flex items-center flex-wrap">
        <ul className="flex items-center">
        {visitedPages.map((visitedPath, index) => {
            const page = pages.find((page) => page.path === visitedPath);
          if (page) {
            return (
            <React.Fragment key={page.path}>
                {index > 0 && (
                <li className="inline-flex items-center">
                    <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                </li>
                )}
                <li className="inline-flex items-center">
                {currentPage === page ? (
                    <span className="mx-4 h-auto text-gray-400 font-medium">
                    {abbreviatePageLabel(page.label)}
                    </span>
                ) : (
                    <a href={page.path} className="text-gray-600 hover:text-blue-500">
                    {abbreviatePageLabel(page.label)}
                    </a>
                )}
                </li>
            </React.Fragment>
            )
        }
        return null; // Se o caminho visitado não estiver na lista de páginas conhecidas
    })}
        </ul>
        </div>
    </div>
  );
};

export default Breadcrumbs;
