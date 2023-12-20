FROM node:18


ENV repolink "https://github.com/lxRbckl/Project-JA.git"

ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}


WORKDIR /usr/src/app
COPY . .


RUN apt-get update && apt-get install -y git

RUN npm install

RUN git clone ${repolink}
RUN cd Project-JA


CMD ["node", "index.js"]