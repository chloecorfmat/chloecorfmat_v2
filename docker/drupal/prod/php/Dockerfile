# Dockerfile
FROM dunglas/frankenphp:1.7-php8.4-bookworm

COPY --from=composer:2.8 /usr/bin/composer /usr/local/bin/composer

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# Installer les dépendances nécessaires
RUN install-php-extensions \
	gd \
    mbstring \
    pdo \
    pdo_pgsql \
    zip \
    xml \
    opcache \
    intl

WORKDIR /app/public