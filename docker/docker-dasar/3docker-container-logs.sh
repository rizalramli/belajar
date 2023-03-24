# create container
docker container create --name contohredis redis:latest
# run container
docker container start contohredis
# run with logs
docker container logs contohredis
# run with logs realtime
docker container logs -f contohredis
