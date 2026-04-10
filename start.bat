@echo off

echo Building auth-server...
cd auth-server
call mvn clean package -DskipTests
cd ..

echo Building order-service...
cd order-service
call mvn clean package -DskipTests
cd ..

echo Starting Docker...
start cmd /k docker compose up --build

echo Starting frontend...
cd order-ui
call npm install
start cmd /k npm run dev
cd ..