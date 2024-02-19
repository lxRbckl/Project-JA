FROM ubuntu:22.04


RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get install -y nodejs


# referencing kubernetes environment #
ENV guildId ${guildId}
ENV gptModel ${gptModel}
ENV channelId ${channelId}
ENV tokenopenai ${tokenopenai}
ENV tokendiscord ${tokendiscord}
ENV applicationId ${applicationId}


WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install


CMD ["node", "index.js", "--no-experimental-fetch"]