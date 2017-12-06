FROM centos:7
MAINTAINER Marco Palladino, marco@mashape.com

ENV KONG_VERSION 0.11.2

RUN yum install -y wget https://bintray.com/kong/kong-community-edition-rpm/download_file?file_path=dists%2Fkong-community-edition-$KONG_VERSION.el7.noarch.rpm && \
    yum clean all
RUN yum -y install postgresql


COPY docker-entrypoint.sh /docker-entrypoint.sh
COPY wait-for-postgres.sh /wait-for-postgres.sh

RUN chmod 777 /*.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 8000 8443 8001 8444

STOPSIGNAL SIGTERM

# RUN mkdir /var/work
# WORKDIR 

CMD ["/usr/local/openresty/nginx/sbin/nginx", "-c", "/usr/local/kong/nginx.conf", "-p", "/usr/local/kong/"]
# RUN yum -y install postgresql

# RUN mkdir /tmp/shell
# ADD ./wait-for-postgres.sh /tmp/shell/
# RUN chmod 777 /tmp/shell/wait-for-postgres.sh

# CMD ["/tmp/shell/wait-for-postgres.sh", "$KONG_PG_HOST","kong", "migrations", "up", "-v"]
# CMD ["/usr/local/openresty/nginx/sbin/nginx", "-c", "/usr/local/kong/nginx.conf", "-p", "/usr/local/kong/"]
