# create network
docker network create --driver bridge mongonetwork
# create container mongodb
docker container create --name mongodb --network mongonetwork --env MONGO_INITDB_ROOT_USERNAME=eko --env MONGO_INITDB_ROOT_PASSWORD=eko mongo:latest
# install image mongo express (GUI untuk database mongo)
docker image pull mongo-express:latest
# create container mongo express dan hubungkan ke container mongodb
docker container create --name mongodbexpress --network mongonetwork --publish 8081:8081 --env ME_CONFIG_MONGODB_URL="mongodb://eko:eko@mongodb:27017/" mongo-express:latest
# jalankan container mongodb
docker container start mongodb
# jalankan container mongodb express
docker container start mongodbexpress
# disconnect container mongodb dari network
docker network disconnect mongonetwork mongodb
# connect container mongodb express dari network
docker network connect mongonetwork mongodb
