FROM node:19.5.0


# referencing kubernetes environment #
ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}

ENV repository "https://github.com/lxRbckl/Project-JA.git"


WORKDIR /usr/src/app
COPY . .


RUN apt-get install -y git

RUN git clone ${repository}
RUN cd Project-JA
RUN npm install


CMD ["node", "index.js"]
