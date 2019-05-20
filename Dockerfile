FROM node:12

RUN mkdir -p /usr/src/lunchroom/client/pages
WORKDIR /usr/src/lunchroom/client
EXPOSE 3000

COPY package*.json ./
COPY pages/* ./pages

RUN npm install && npm run build
RUN export NODE_ENV=development

COPY . .

CMD [ "npm", "start" ]
