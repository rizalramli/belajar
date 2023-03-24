# install image nginx
docker image pull nginx:latest
# port forwarding
docker container create --name contohnginx --publish 8080:80 nginx:latest
