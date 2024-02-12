# Build Stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Production Stage
FROM socialengine/nginx-spa:latest
COPY --from=build-stage ./app/dist /app
RUN chmod -R 777 /app