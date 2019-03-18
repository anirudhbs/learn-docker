## Basics

```
docker run <image name>
docker pull <image name>
docker images # list all images on machine

docker run busybox echo "hello from busybox" # echoes message

docker ps
docker ps -a

# -it brings up interactive terminal
docker run -it busybox sh

# remove exited containers
docker rm $(docker ps -a -q -f status=exited)

# removes container after it has stopped running
docker run --rm hello-world

# remove all stopped containers
docker container prune
```

## Static site

```
# Building image
docker build -t my-static-site .

# Run container with "static-site" as name
docker run -d -P --name static-site prakhar1989/static-site

# port map
docker port static-site
# <internal> -> <external>

# external port : internal port
docker run -p 8080:80 prakhar1989/static-site

# stop container with name or container ID
docker stop static-site

```

## Types of images

- Base images (OSes)
- Child images
- Official images (Python, Ubuntu, busybox, hello-world)
- User images (user/image-name)

## Node app

```
# Build the dockerfile
docker build -t my-node-app .

# Start the container
docker run -p 8081:8080 my-node-app # external: internal

# Building with username and tag
docker build -t onfireani/hello-world:latest . # tag can be literally anything <latest here>

# Push to dockerhub
docker push onfireani/hello-world:latest

# Login
docker login
```
