FROM node:16

# Define a variável de ambiente DATABASE_URL no contêiner
ENV DATABASE_URL=postgresql://postgres:postgres123@database-nexus-2.c2wzygnnpgfg.us-east-1.rds.amazonaws.com:5432/nexusDb?connect_timeout=30&pool_timeout=30&socket_timeout=30

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
