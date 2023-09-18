import fetch, { Response } from 'node-fetch';

// Função para simular uma resposta HTTP bem-sucedida com conteúdo JSON
function mockFetch(data: any): jest.Mock {
  return jest.fn().mockResolvedValue(new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } }));
}

// Mock do fetch para substituir o fetch real
(global as any).fetch = mockFetch([
  {
    id: '32797b25-f322-4329-b5b7-011c196ee26d',
    courseType: 'Engenharia da Computação',
    director: 'José Marcelino',
    isActive: true,
    createdAt: '2023-09-06T08:27:34.889Z',
    updatedAt: '2023-09-06T08:27:34.889Z',
    modules: [],
    classes: [],
    initiatives: [
      {
        id: '7866e9df-ffb2-4e27-a9fc-149631a03618',
        partnerId: 'cbc810d9-31d1-4e9f-9cf1-bffbb8956c8a',
        moduleId: 'ebba981a-c4b7-482f-9d14-aef8b7ead9a7',
        courseId: '32797b25-f322-4329-b5b7-011c196ee26d',
        initiativeName: 'Minha Iniciativa',
        scope: 'Escopo da Iniciativa',
        isActive: true,
        createdAt: '2023-09-12T13:39:29.147Z',
        updatedAt: '2023-09-12T13:39:28.660Z',
      },
      {
        id: '26e4b15c-7af2-42a3-be71-d9036a5b11a7',
        partnerId: 'cbc810d9-31d1-4e9f-9cf1-bffbb8956c8a',
        moduleId: 'ebba981a-c4b7-482f-9d14-aef8b7ead9a7',
        courseId: '32797b25-f322-4329-b5b7-011c196ee26d',
        initiativeName: 'Minha Iniciativa',
        scope: 'Escopo da Iniciativa',
        isActive: true,
        createdAt: '2023-09-12T21:43:59.777Z',
        updatedAt: '2023-09-12T21:43:59.313Z',
      },
    ],
  },
  // Adicione mais cursos de exemplo aqui, se necessário
]);

// Função para buscar cursos na API
async function getCourses(): Promise<any[]> {
  const response = await fetch('http://localhost:8080/courses');
  return await response.json();
}

// Teste para verificar as informações do primeiro curso
test('Verificar informações do primeiro curso', async () => {
  const courses = await getCourses();
  const primeiroCurso = courses[0];

  // Valores esperados
  const expectedId = '32797b25-f322-4329-b5b7-011c196ee26d';
  const expectedCourseType = 'Engenharia da Computação';
  const expectedDirector = 'José Marcelino';
  const expectedIsActive = true;
  const expectedCreatedAt = '2023-09-06T08:27:34.889Z';
  const expectedUpdatedAt = '2023-09-06T08:27:34.889Z';

  // Comparar os valores esperados com os valores recebidos
  expect(primeiroCurso.id).toBe(expectedId);
  expect(primeiroCurso.courseType).toBe(expectedCourseType);
  expect(primeiroCurso.director).toBe(expectedDirector);
  expect(primeiroCurso.isActive).toBe(expectedIsActive);
  expect(primeiroCurso.createdAt).toBe(expectedCreatedAt);
  expect(primeiroCurso.updatedAt).toBe(expectedUpdatedAt);
});