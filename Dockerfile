FROM node:14-alpine

WORKDIR '/redis-server'

# npm install
COPY package.json .
RUN npm i

# update src
COPY src src

# start server
CMD ["npm", "start"]
