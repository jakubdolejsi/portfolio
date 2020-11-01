FROM node:10-alpine

WORKDIR /backend/user_service

COPY package.json package-lock.json /backend/user_service/

COPY . /backend/user_service
# install dependencies
RUN npm install

ENTRYPOINT npm run dev
