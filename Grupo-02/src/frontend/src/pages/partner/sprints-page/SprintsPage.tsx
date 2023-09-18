import ModulesCard from './SprintsCard';

const ModulesPage = () => {
  const cardData = [
    {
      title: 'Sprint 1',
      content: 'Conteúdo do Card 1...',
    },
    {
      title: 'Sprint 2',
      content: 'Conteúdo do Card 2...',
    },
    {
      title: 'Sprint 3',
      content: 'Conteúdo do Card 3...',
    },
    {
      title: 'Sprint 4',
      content: 'Conteúdo do Card 4...',
    },
    {
      title: 'Sprint 5',
      content: 'Conteúdo do Card 5...',
    },
  ];

  return (
    <div className="flex justify-center mr-28 items-center h-full w-full mt-2 rounded-lg bg-gray-200 shadow-xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((card, index) => (
          <ModulesCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default ModulesPage;
