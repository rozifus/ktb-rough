FROM google/golang-runtime

ADD . /go/src/github.com/rozifus/kiva-team-bootstrapper

RUN go install github.com/rozifus/kiva-team-bootstrapper

ENTRYPOINT /go/bin/main

EXPOSE 8090
