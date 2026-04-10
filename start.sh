#!/bin/bash

echo "Building auth-server..."
cd auth-server || exit
mvn clean package -DskipTests

echo "Building order-service..."
cd ../order-service || exit
mvn clean package -DskipTests

cd ..

echo "Starting Docker Compose..."
docker compose up --build