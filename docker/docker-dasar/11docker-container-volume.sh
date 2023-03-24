# membuat volume
docker volume create mongodata
# buat container dengan settingan mount volume (volume adalah storage untuk penyimnpanan container)
docker container create --name mongovolume --publish 27019:27017 --mount "type=volume,source=mongodata,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=eko --env MONGO_INITDB_ROOT_PASSWORD=eko mongo:latest
# stop container
docker container stop mongovolume
# menghapus container
docker container rm mongovolume
# run lagi ketika container lama sudah di hapus,tapi load volume yang lama
docker container create --name mongovolume --publish 27019:27017 --mount "type=volume,source=mongodata,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=eko --env MONGO_INITDB_ROOT_PASSWORD=eko mongo:latest
