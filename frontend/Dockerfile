FROM node:10-alpine

WORKDIR /frontend

COPY package.json yarn.lock /frontend/

RUN yarn global add @quasar/cli@latest

COPY . /frontend
# install dependencies
RUN yarn install

ENTRYPOINT quasar dev