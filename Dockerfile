FROM nginx:1.19.2-alpine
COPY default.conf /etc/nginx/conf.d
COPY /dist/BookStore-Angular /usr/share/nginx/html
