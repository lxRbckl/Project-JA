FROM node:18


ENV repository "https://github.com/lxRbckl/Project-JA.git"

ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}


WORKDIR /usr/src/app
COPY . .


RUN apt-get install -y git

RUN npm install

RUN git clone ${repository}
RUN cd Project-JA


CMD ["node", "index.js"]
