FROM node:15

WORKDIR /app

COPY . .

RUN yarn install
ENV NODE_ENV=production
CMD ["yarn", "serve"]