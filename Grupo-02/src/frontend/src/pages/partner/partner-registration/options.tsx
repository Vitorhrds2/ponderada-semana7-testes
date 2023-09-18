const segmentOptions = [
    'Serviços Financeiros', 'Private Equity', 'Serviços Especializados', 'Hotelaria, Turismo e Lazer', 'Tecnologia', 'Mídia', 
    'Telecomunicações', 'Energia', 'Logística', 'Indústria e comércio de Veículos e Peças', 'Indústria e comércio de Medicamentos', 
    'Indústria e comércio de Cosméticos, Higiene e Limpeza', 'Indústria e comércio de Máquinas e Equipamentos', 
    'Indústria e comércio de Materiais de Construção', 'Indústria e comércio de Fumo/Tabaco', 'Indústria e comércio de Alimentos', 
    'Indústria e comércio de Moda e vestuário', 'Indústria e comércio de Móveis, Eletros, Eletrônicos, Livros e Brinquedos', 
    'Incorporação e Construção', 'Agronegócio', 'Shopping Center', 'Infraestrutura', 'Óleo e Gás', 'Químico e Petroquímico', 
    'Siderurgia e Mineração', 'Papel e Celulose', 'Serviços de Saúde', 'Planos/Seguros de Saúde', 'Serviços de Educação', 
    'Administração Pública', 'Saneamento e tratamento de resíduos, público ou privado', 'Serviços de meio ambiente e de responsabilidade social, público ou privado', 
    'Serviços de mobilidade Urbana (taxi, app de transporte em geral, empresas de ônibus, metro)'
  ];

const areaOptions = ['RH', 'Jurídico', 'Compras', 'Financeiro', 'Controladoria', 'Auditoria', 'Marketing', 'TI', 'Administração Patrimonial', 
'Administração Pessoal', 'Administrativo', 'Atendimento', 'Contábil', 'Pesquisa e Desenvolvimento/Inovação', 'E-commerce', 
'Estoque', 'Logística', 'Manutenção', 'Operações', 'Orçamento', 'Planejamento', 'Processos', 'Engenharia', 'Comunicação', 
'Suprimentos e Logística', 'Adm e Apoio a Vendas', 'Comercial', 'Riscos', 'Saúde, Segurança e Meio Ambiente', 'Contratos', 
'Controle de Qualidade', 'Desenvolvimento Organizacional', 'Diversidade e Inclusão', 'Governança'];

const projects = [
  'Ciência da Computação - Projeto: Aplicações escaláveis em sistemas distribuídos',
  'Engenharia de Software - Projeto: Implantação de automação com reconhecimento de voz',
  'Engenharia de Computação - Projeto: Sistema de manutenção preditiva',
  'Sistemas de Informação - Projeto: Implantação de sistemas de gestão empresarial',
];

const organizationType = ['ONG', 'Empresa', 'Entidade governamental']

const options = {
  segment: segmentOptions,
  area: areaOptions,
  project: projects,
  organizationType: organizationType

};

export default options;