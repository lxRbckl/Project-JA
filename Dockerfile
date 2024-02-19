FROM node:18.19.1


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


CMD ["node", "index.js"]