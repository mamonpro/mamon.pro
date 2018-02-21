FROM node:latest

ENV DEBIAN_FRONTEND noninteractive

RUN mkdir /build
WORKDIR /build

RUN apt-get update && apt-get install -y apt-utils && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y yarn
