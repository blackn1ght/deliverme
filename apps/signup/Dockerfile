FROM node:12-alpine AS base
WORKDIR /app
COPY . .
COPY src/ /src/

RUN npm install
WORKDIR /src/client-app
RUN npm install
RUN npm run-script build

WORKDIR /app

ENTRYPOINT [ "node", "src/index.js" ]