FROM node:15

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build
ENV NODE_ENV=production
CMD ["yarn", "serve"]