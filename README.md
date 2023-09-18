## Teste: Verificar informações do primeiro curso recebido no endpoint /courses

**Objetivo:** O objetivo desse teste foi garantir que a API retornasse as informações corretas para o primeiro curso na lista de cursos.

**Pré-condição:** Antes de executar esse teste automatizado, a API deveria ter sido acessível e estar em execução no endereço **`http://localhost:8080/courses`**. O mock de fetch deveria ter sido configurado para retornar um curso fictício. Em geral, o backend do projeto deve estar rodando na porta 8080, para isso é necessário instalar as tecnologias necessárias para o projeto (React.js(Typescript)+Vite e o Nest.js) que estão no documento README.md na pasta Grupo-02 e em seguida instalar as dependências necessárias utilizando o `npm i` e em seguida `npm run start: dev`. Outra forma de configurar oambiente para o teste é criando um endpoint chamado /courses no endereço `http://localhost:8080` com as informações mockadas para fins de teste e verificação.

**Procedimento de Teste:**

1. Foi enviado uma solicitação GET para **`http://localhost:8080/courses`**.
2. A resposta da API foi capturada.
3. A resposta JSON foi analisada para extrair informações sobre o primeiro curso.

![Screenshot da tela com o procedimento de teste](./Screenshots/Screenshot%202023-09-17%20230529.png)


**Resultado Esperado:**
Esperava-se que a API retornasse um curso com as seguintes informações:

- ID: '32797b25-f322-4329-b5b7-011c196ee26d'
- Tipo do Curso: 'Engenharia da Computação'
- Diretor: 'José Marcelino'
- Ativo: true
- Data de Criação: '2023-09-06T08:27:34.889Z'
- Data de Atualização: '2023-09-06T08:27:34.889Z'

![Screenshot da tela com o resultado esperado](./Screenshots/Screenshot%202023-09-17%20230514.png)


**Resultado Obtido:**

O teste automatizado fez as comparações entre as informações obtidas na resposta da API e as informações esperadas.

![Screenshot da tela com o resultado obtido](./Screenshots/Screenshot%202023-09-17%20222156.png)

**Pós-condição:**

Não houve ações específicas de pós-condição nesse teste, já que ele não alterou o estado da aplicação. O resultado do teste foi registrado e usado para verificar a conformidade da API com os requisitos especificados.
