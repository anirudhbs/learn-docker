FROM node:12.5.0-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install

# Check out .dockerignore to see what's ignored below
COPY . /usr/src/app

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

# To build:
# docker build -t docker-play:1 .

# To run:
# docker run -p 8080:80 docker-play:1
