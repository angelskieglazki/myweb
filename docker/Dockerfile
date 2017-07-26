FROM alpine:latest
MAINTAINER Max Ponka <mpano91@gmail.com>

ADD . /root/Projects/web/
ADD lighttpd.conf /etc/lighttpd/lighttpd.conf
WORKDIR /root/Projects/web/

RUN apk add --update \
        lighttpd \
        && rm -rf /var/cache/apk/*

RUN adduser www-data -G www-data -H -s /bin/false -D

EXPOSE 80
VOLUME /var/www

ENTRYPOINT ["lighttpd",  "-D",  "-f",  "/etc/lighttpd/lighttpd.conf"]
