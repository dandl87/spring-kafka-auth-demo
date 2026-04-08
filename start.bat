@echo off

echo Building auth-server...
cd auth-server
call mvn clean package -DskipTests

echo Building order-service...
cd ../order-service
call mvn clean package -DskipTests

cd ..

echo Starting Docker Compose...
docker compose up --build