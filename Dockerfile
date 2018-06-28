FROM node:8-alpine
RUN mkdir -p /src
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]
