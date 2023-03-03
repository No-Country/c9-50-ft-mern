FROM node:19.2-alpine3.16

ARG MONGO_URL
ARG GMAIL_ACCOUNT
ARG GMAIL_PASSWORD
ARG PORT
ARG SECRET 

WORKDIR /app

ADD /public ./public

ADD /api ./api

ADD /app ./app

COPY package.json ./

RUN npm install

RUN npm run build

EXPOSE 3001 3002

CMD [ "npm", "start" ]