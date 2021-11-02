FROM node:14-alpine AS calculadoraAngular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx

COPY --from=calculadoraAngular app/dist/calculadora /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf