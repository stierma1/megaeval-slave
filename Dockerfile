FROM node:carbon
MAINTAINER stierma1

ENV PORT=8070
ENV AUTH=DEFAULT

ADD . /home/appuser

WORKDIR /home/appuser

RUN npm install

CMD node server.js --port=$PORT --auth=$AUTH
