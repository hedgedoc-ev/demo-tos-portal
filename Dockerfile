FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install

EXPOSE "3000/tcp"

ENTRYPOINT ["node", "main.mjs"]
