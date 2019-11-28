FROM node:12-alpine AS base
WORKDIR /src
COPY . .

RUN npm install

ENTRYPOINT [ "node", "src/index.js" ]