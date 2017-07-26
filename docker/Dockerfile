FROM alpine:latest
MAINTAINER Max Ponka <mpano91@gmail.com>

ADD . /root/Projects/web/str8ofhearts.org/
ADD lighttpd.conf /etc/lighttpd/lighttpd.conf


RUN apk add --update \
        lighttpd \
        && rm -rf /var/cache/apk/*

EXPOSE 3000
VOLUME /root/Projects/web/str8ofhearts.org/
WORKDIR /root/Projects/web/str8ofhearts.org/

ENTRYPOINT ["lighttpd",  "-D",  "-f",  "/etc/lighttpd/lighttpd.conf"]
