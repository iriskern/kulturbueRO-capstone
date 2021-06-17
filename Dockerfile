FROM openjdk:16

MAINTAINER Iris Kern <kern.iris@posteo.de>

ADD backend/target/kulturbuero-capstone.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]