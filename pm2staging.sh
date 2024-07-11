#!/bin/bash

if [ -f .env ]; then
    set -a
    . .env
    set +a
fi

if [ -z "$BIN_STAGING_NAME" ]; then
    echo "BIN_STAGING_NAME is not set. Please set it in the .env file."
    exit 1
fi

if pm2 describe "$BIN_STAGING_NAME" > /dev/null 2>&1; then
    echo "Process $BIN_STAGING_NAME exists"
    pm2 restart "$BIN_STAGING_NAME"
    pm2 save --force

else
    echo "Process $BIN_STAGING_NAME does not exist"
    pm2 start npm --name "$BIN_STAGING_NAME" -- start
    pm2 save --force
fi
