FROM openjdk:16

MAINTAINER Iris Kern <kern.iris@posteo.de>

ADD backend/target/kulturbuero.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI -jar /app.jar" ]