FROM node:16.20.2
WORKDIR /usr/src/app
COPY *.json ./
COPY .npmrc .npmrc
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "./build.sh" ]
CMD [ "node", "build/index.js" ]
