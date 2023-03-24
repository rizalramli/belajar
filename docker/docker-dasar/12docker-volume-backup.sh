# matikan container mongovolume
docker container stop mongovolume
# proses backup data
docker container create --name nginxbackup
# container yang buat backup
--mount "type=bind,source=/Users/khannedy/Developments/YOUTUBE/belajar-docker-dasar/backup,destination=/backup" 
# container yang ingin di backup datanya
--mount "type=volume,source=mongodata,destination=/data" nginx:latest
# jalankan container backup
docker container start nginxbackup
# masuk ke container path 
docker container exec -i -t nginxbackup /bin/bash
# proses membuat tar.gz
tar cvf /backup/backup.tar.gz /data
# stop container
docker container stop nginxbackup
# remove container
docker container rm nginxbackup
# start container mongo volume
docker container start mongovolume

# BACKUP dengan container run dengan image ubuntu
# install image ubuntu
docker image pull ubuntu:latest
# stop container mongovolume
docker container stop mongovolume
# jalankan script untuk backup data
docker container run --rm --name ubuntubackup --mount "type=bind,source=/Users/khannedy/Developments/YOUTUBE/belajar-docker-dasar/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/data" ubuntu:latest tar cvf /backup/backup-lagi.tar.gz /data
# run container mongovolume
docker container start mongovolume
