FROM node:10.16-alpine

RUN mkdir -p ./app
WORKDIR ./app
COPY package*.json ./

RUN npm install --silent
COPY src .
EXPOSE 8000

CMD ["npm","start"]