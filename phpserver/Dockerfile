FROM php:7.4.0-apache
COPY php.ini /usr/local/etc/php/

# Install PHP extensions
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get update && apt-get install -y \
      libicu-dev \
      libpq-dev \
      libpcre3-dev \
      libmcrypt-dev \
      mariadb-client  \
      default-libmysqlclient-dev \
      ruby-full \
      nodejs \
      openssh-server \
      libonig-dev  \
      libzip-dev \
    && rm -r /var/lib/apt/lists/* \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-install \
      intl \
      mbstring \
      # mcrypt \
      mysqli \
      pcntl \
      pdo_mysql \
      pdo_pgsql \
      pgsql \
      zip \
      opcache
    # && docker-php-ext-configure mcrypt \
    # && docker-php-ext-install mcrypt

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN pecl install xdebug

# # Install Xdebug
# RUN curl -fsSL 'https://xdebug.org/files/xdebug-2.4.0.tgz' -o xdebug.tar.gz \
#     && mkdir -p xdebug \
#     && tar -xf xdebug.tar.gz -C xdebug --strip-components=1 \
#     && rm xdebug.tar.gz \
#     && ( \
#     cd xdebug \
#     && phpize \
#     && ./configure --enable-xdebug \
#     && make -j$(nproc) \
#     && make install \
#     ) \
#     && rm -r xdebug \
#     && docker-php-ext-enable xdebug

ADD . /var/www/html/

EXPOSE 80
EXPOSE 22
 
WORKDIR /var/www/html/

#Install phpunit
#RUN composer install
