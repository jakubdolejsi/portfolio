FROM node:10-alpine

WORKDIR /backend/project_service

COPY package.json package-lock.json /backend/project_service/

COPY . /backend/project_service
# install dependencies
RUN npm install

ENTRYPOINT npm run dev