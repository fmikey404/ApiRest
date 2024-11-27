FROM mongo:latest

COPY ./init/init-db.js /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod"]
