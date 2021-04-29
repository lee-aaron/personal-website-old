FROM node:15

WORKDIR /usr/src/app

COPY dist/ ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 8080

CMD ["PORT=8080 yarn serve"]