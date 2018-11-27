# robinyonge.com
[![Build Status](https://travis-ci.org/gilmoregrills/robinyonge.com.svg?branch=master)](https://travis-ci.org/gilmoregrills/robinyonge.com)

## Deploy to GKE:

### Build and push docker image:

`docker build . --tag=eu.gcr.io/kube-personal/robin-dot-com`

`docker push eu.gcr.io/kube-personal/robin-dot-com`
