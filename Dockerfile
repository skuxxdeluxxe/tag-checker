FROM node:15

WORKDIR /usr/src/app
COPY client/ ./client
RUN cd client && npm install && npm run build

COPY server/ ./server
RUN cd server && npm install

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "./server/server.js"]

