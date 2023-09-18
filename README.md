# 

**Nome do Teste:** Verificou informações do primeiro curso

**Objetivo:** O objetivo desse teste foi garantir que a API retornasse as informações corretas para o primeiro curso na lista de cursos.

**Pré-condição:** Antes de executar esse teste automatizado, a API deveria ter sido acessível e estar em execução no endereço **`http://localhost:8080/courses`**. O mock de fetch deveria ter sido configurado para retornar um curso fictício.

**Procedimento de Teste:**

1. Foi enviado uma solicitação GET para **`http://localhost:8080/courses`**.
2. A resposta da API foi capturada.
3. A resposta JSON foi analisada para extrair informações sobre o primeiro curso.

**Resultado Esperado:**
Esperava-se que a API retornasse um curso com as seguintes informações:

- ID: '32797b25-f322-4329-b5b7-011c196ee26d'
- Tipo do Curso: 'Engenharia da Computação'
- Diretor: 'José Marcelino'
- Ativo: true
- Data de Criação: '2023-09-06T08:27:34.889Z'
- Data de Atualização: '2023-09-06T08:27:34.889Z'

**Resultado Obtido:**

O teste automatizado fez as comparações entre as informações obtidas na resposta da API e as informações esperadas.

**Pós-condição:**

Não houve ações específicas de pós-condição nesse teste, já que ele não alterou o estado da aplicação. O resultado do teste foi registrado e usado para verificar a conformidade da API com os requisitos especificados.