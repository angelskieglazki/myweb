FROM alpine:latest
MAINTAINER Max Ponka <mpano91@gmail.com>

ADD . /root/Project/

#ADD . /var/www/str8ofhears.org/
ADD lighttpd.conf /etc/lighttpd/lighttpd.conf
#ADD str8ofhearts.org.conf /etc/lighttpd/str8ofhearts.org.conf


RUN apk add --update \
        lighttpd \
        && rm -rf /var/cache/apk/*

EXPOSE 3000
VOLUME  /root/Project/
WORKDIR  /root/Project/
#VOLUME  /var/www/str8ofhears.org/
#WORKDIR  /var/www/str8ofhears.org/


ENTRYPOINT ["lighttpd",  "-D",  "-f",  "/etc/lighttpd/lighttpd.conf"]
