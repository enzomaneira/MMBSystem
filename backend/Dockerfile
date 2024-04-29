# Dockerfile for Spring Boot application

FROM openjdk:17-alpine

WORKDIR /app

# Copiar o arquivo JAR gerado para o contêiner
COPY target/springboot-mongo-docker.jar app.jar

# Expor a porta 8080 para acessar a aplicação
EXPOSE 8080

# Comando para executar a aplicação Spring Boot
CMD ["java", "-jar", "app.jar"]
