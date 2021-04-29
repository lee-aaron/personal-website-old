FROM node:15 as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build
ENV NODE_ENV=production
CMD ["yarn", "serve"]