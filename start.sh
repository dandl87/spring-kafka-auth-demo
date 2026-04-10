#!/bin/bash

set -e  # ferma tutto se un comando fallisce

echo "Building auth-server..."
cd auth-server || exit
mvn clean package -DskipTests
cd ..

echo "Building order-service..."
cd order-service || exit
mvn clean package -DskipTests
cd ..

echo "Starting Docker..."
docker compose up --build &

echo "Starting frontend..."
cd order-ui || exit
npm install
npm run dev