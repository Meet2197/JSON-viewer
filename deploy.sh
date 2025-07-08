#!/bin/sh

REMOTE_USER=mebh737h
REMOTE_HOST=https://gitlab.mn.tu-dresden.de
CONTAINER_NAME=json-viewer
IMAGE_NAME=registry.gitlab.mn.tu-dresden.de/mebh737h/jsonreader:latest

ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST << EOF
  docker pull $IMAGE_NAME
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
  docker run -d --name $CONTAINER_NAME -p 80:80 $IMAGE_NAME
EOF
