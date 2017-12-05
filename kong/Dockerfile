FROM kong:latest

RUN yum -y install postgresql

RUN mkdir /tmp/shell
ADD ./wait-for-postgres.sh /tmp/shell/
RUN chmod 777 /tmp/shell/wait-for-postgres.sh

# CMD ["/tmp/shell/wait-for-postgres.sh", "$KONG_PG_HOST","kong", "migrations", "up", "-v"]
CMD ["/usr/local/openresty/nginx/sbin/nginx", "-c", "/usr/local/kong/nginx.conf", "-p", "/usr/local/kong/"]
