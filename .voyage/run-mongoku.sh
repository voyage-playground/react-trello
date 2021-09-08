#!/bin/bash

cd /app

echo "🚀 Wait for DB to start"
dockerize -wait "tcp://127.0.0.1:27017" -timeout 60s

node dist/server.js
