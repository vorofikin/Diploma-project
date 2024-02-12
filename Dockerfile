#LABEL authors="andrii.nikiforov"
#ARG NODE_VERSION=18
#
#FROM node:${NODE_VERSION}-alpine as base
#WORKDIR /usr/src/app
#
#FROM node:${NODE_VERSION}-alpine as monitor-app
#COPY . ./monitor-app
#RUN cd monitor-app && yarn install
#
#FROM node:${NODE_VERSION}-alpine as generator-app
#COPY . ./generator-app
#RUN cd generator-app && yarn install
#
#FROM base as dev
#
##COPY ./monitor-app/ ./monitor-app/
##COPY ./generator-app/ ./generator-app/
##
##COPY monitor-app/package*.json ./monitor-app/
##COPY generator-app/package*.json ./generator-app/
##COPY package.json ./
#
#RUN cd monitor-app && yarn install
#RUN cd generator-app && yarn install
#
##RUN --mount=type=bind,source=package.json,target=package.json \
##    --mount=type=bind,source=yarn.lock,target=yarn.lock \
##    --mount=type=cache,target=/root/.yarn \
##    yarn run init
#
#EXPOSE 3000
#EXPOSE 3001
#CMD ["yarn", "run", "dev"]

RUN adduser -ms /bin/bash -u 1001 app
USER app
COPY --chown=app:app . /app