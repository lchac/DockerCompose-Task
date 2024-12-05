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

### Kubernetes

kubectl apply -f kubernetes/namespace.yaml

kubectl apply -f kubernetes/mongodb-pod.yaml

kubectl apply -f kubernetes/mongodb-service.yaml

kubectl apply -f kubernetes/webapp-replicaset.yaml

kubectl apply -f kubernetes/webapp-lb.yaml

kubectl get namespaces

kubectl get pods -n web-app-ns

kubectl get services -n web-app-ns

kubectl get replicaset -n web-app-ns

kubectl get replicaset -n web-app-ns

kubectl get services -n web-app-ns

kubectl config get-contexts

cat ~/.kube/config

kubectl logs -l app=web-app -n web-app-ns

kubectl logs -l app=mongo-db -n web-app-ns

kubectl logs mongo-db-pod -n web-app-ns

kubectl describe pod mongo-db-pod

kubectl describe node node-name
