## Documentation

- https://www.mongodb.com/resources/products/compatibilities/docker
- https://mongoosejs.com/docs/index.html
- https://hub.docker.com/r/mongodb/mongodb-community-server/tags
- https://docs.docker.com/compose/install/linux/#install-the-plugin-manually

## Commands

docker build -f "Dockerfile-db" -t mongodb .

docker run --rm -dp 27017:27017 mongodb

docker build -f "Dockerfile-app" -t node-app .

docker run --rm -dp 127.0.0.1:3000:3000 node-app

docker compose up -d

docker compose down

---

sudo yum install -y git
