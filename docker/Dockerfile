FROM alpine:latest
MAINTAINER Max Ponka <mpano91@gmail.com>

ADD . /root/Projects/web/
ADD lighttpd.conf /etc/lighttpd/lighttpd.conf


RUN apk add --update \
        lighttpd \
        && rm -rf /var/cache/apk/*

EXPOSE 3000
VOLUME /root/Projects/web/
WORKDIR /root/Projects/web/

ENTRYPOINT ["lighttpd",  "-D",  "-f",  "/etc/lighttpd/lighttpd.conf"]
