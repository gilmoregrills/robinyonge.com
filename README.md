# robinyonge.com

## Deploy to GKE:

### Build and push docker image:

`docker build . --tag=eu.gcr.io/kube-personal/robin-dot-com`

`docker push eu.gcr.io/kube-personal/robin-dot-com`

### Build terraform templates:

`cd terraform`

`terraform init`

`terraform apply`

### Deploy the site:

`kubectl apply -f kubernetes/`

## Deploy to EKS:

Needs work when EKS is available.