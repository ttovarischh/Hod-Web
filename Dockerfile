# For build try something like this:
# docker build -t myapp:$VERSION .

ARG APP_DIR=/opt/app

FROM node:20-alpine AS build_image
ARG APP_DIR
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.28-alpine
ARG APP_DIR
WORKDIR ${APP_DIR}
COPY --from=build_image ${APP_DIR}/build ${APP_DIR}
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80