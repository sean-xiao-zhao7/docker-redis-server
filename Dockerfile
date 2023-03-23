FROM node:alphine-14

WORKDIR '/redis-server'

# npm install
COPY package.json .
RUN npm i

# update src
COPY src .

# start server
CMD ['npm', 'start']


