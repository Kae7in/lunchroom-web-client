FROM node:10

RUN mkdir -p /usr/src/lunchroom/pages
WORKDIR /usr/src/lunchroom
EXPOSE 4000

COPY package*.json ./
COPY pages/* ./pages

RUN export NODE_ENV=development
RUN npm install && npm run build

COPY . .

CMD [ "npm", "start" ]
