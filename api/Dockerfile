FROM php:8.3-fpm-bookworm

ENV TZ Asia/Tokyo

RUN apt-get update && \
  apt-get install -y libonig-dev libicu-dev libpq-dev libzip-dev zip && \
  docker-php-ext-install pdo_pgsql intl zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www