FROM node:20.11.1


# referencing kubernetes environment #
ENV guildId '974210528958369863'
ENV gptModel 'gpt-3.5-turbo'
ENV channelId '1061387142082863104'
ENV tokenopenai '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'
ENV tokendiscord 'OTcwMjIxMTg0MDY1MDgxMzc0.GXbajv.hkOJe3Xa1Y0CnjZifyHAVcYOYJ0zAeElOqrJeY'
ENV applicationId '970221184065081374'


WORKDIR /usr/app
COPY ./ /usr/app


RUN npm install


CMD ["node", "index.js"]
