FROM node:8-alpine
RUN mkdir -p /src
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /src
COPY . .
RUN npm install
EXPOSE $PORT
CMD [ "npm", "start" ]
