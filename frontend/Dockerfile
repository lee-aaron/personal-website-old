FROM node:12
WORKDIR /usr/src/app

COPY build ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 8080

CMD ["PORT=8080 yarn serve"]