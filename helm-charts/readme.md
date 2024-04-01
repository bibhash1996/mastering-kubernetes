# Helm charts 

Deploying charts on local minikube setup

# Commands

`helm install <unique-release-name> helm-chart-repo/ --values path/to/values.yaml`

`helm install <unique-release-name> helm-chart-repo/ --values path/to/values.yaml -f pathto/values-dev.yaml`

extra dev yaml with -f option gives extra values

`helm ls`

`helm delete release-name`