# Helm charts 

Deploying charts on local minikube setup

# Commands

`helm install <unique-release-name> helm-chart-repo/ --values path/to/values.yaml`

`helm install <unique-release-name> helm-chart-repo/ --values path/to/values.yaml -f pathto/values-dev.yaml`

extra dev yaml with -f option gives extra values

`helm ls`

`helm delete release-name`

# Service Catalog in k8

https://medium.com/@HoussemDellai/introduction-to-kubernetes-service-catalog-37317b15670

Service Catalog is what allows Kubernetes to provision and connect to resources in the cloud. 
Service Catalog is an extension to the Kubernetes API. It enables k8s to provision and connect to external managed services like databases and messaging systems.

ServiceInstance and ServiceBinding kind of resources are required.
The service catalog is an extension of k8 api and needs to be installed in the cluster prior to usage