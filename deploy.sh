docker build . --tag=eu.gcr.io/kube-personal/robin-dot-com
docker push eu.gcr.io/kube-personal/robin-dot-com
kubectl apply -f kubernetes/