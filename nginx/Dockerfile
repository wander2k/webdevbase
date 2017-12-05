FROM nginx:1.13.0

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

RUN service nginx start