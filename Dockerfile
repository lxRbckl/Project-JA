FROM node:18


WORKDIR usr/src/app


COPY . .


ENV tokenopenai undefined
ENV tokendiscord undefined


RUN npm install


CMD ["node", "index.js"]