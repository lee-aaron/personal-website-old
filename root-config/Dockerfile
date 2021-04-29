FROM node:15

WORKDIR /usr/src/app

COPY dist/ ./
COPY yarn.lock ./

RUN yarn install
RUN yarn serve