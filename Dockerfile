FROM node:19.5.0


# referencing kubernetes environment #
ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}


WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install


CMD ["node", "index.js"]
