# build environment
FROM node:14.15.2-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./

ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

RUN npm run build

# production environment
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf

RUN echo $'server { \n\
  listen 80; \n\
  location / { \n\
    root   /usr/share/nginx/html; \n\
    index  index.html index.htm; \n\
    try_files $uri $uri/ /index.html; \n\
  } \n\
  error_page 500 502 503 504 /50x.html; \n\
  location = /50x.html { \n\
    root  /usr/share/nginx/html; \n\
  } \n\
}' > /etc/nginx/conf.d/nginx.conf

# COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]