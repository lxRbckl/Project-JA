FROM node:18


# referencing kubernetes environment #
ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}

ENV repository "https://github.com/lxRbckl/Project-JA.git"


WORKDIR /usr/src/app
COPY . .


RUN apt-get install -y git

RUN npm install

RUN git clone ${repository}
RUN cd Project-JA


CMD ["node", "index.js"]
