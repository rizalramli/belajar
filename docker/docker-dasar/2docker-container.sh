# semua
docker container ls -a
# yang berjalan
docker container ls
# create container
docker container create --name contohredis redis:latest
docker container create --name contohredis2 redis:latest
# run container
docker container start contohredis
docker container start contohredis2
# stop container
docker container stop contohredis
docker container stop contohredis2
# remove container
docker container rm contohredis
docker container rm contohredis2
