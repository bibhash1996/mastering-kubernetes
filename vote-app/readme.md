###  Voting app for programming languages

# Stack
1. NextJS with Tailwind CSS
2. NodeJS (Express Server)
3. MongoDB
4. Kubernetes deployment (Using AWS EKS for the same)

**Note** : Typescript will be used for types

Not focusing on the UI element more but the idea is to make the app running and host it on EKS. 



Image : 

![Screenshot 2024-03-20 at 9 18 05 PM](https://github.com/bibhash1996/mastering-kubernetes/assets/14090203/0668ea57-83e9-47db-b52c-dc6527689d0f)


Enter one of the mongo pods and set it to PRIMARY and rest of them to SECONDARY replicas :

```
rs.initiate();
sleep(2000);
rs.add("mongo-1.mongo:27017");
sleep(2000);
rs.add("mongo-2.mongo:27017");
sleep(2000);
cfg = rs.conf();
cfg.members[0].host = "mongo-0.mongo:27017";
rs.reconfig(cfg, {force: true});
sleep(5000);
 ```

For debugging pods : we can use kubectl port forwarding to forward requests to your pods directly using kubectl
    `kubectl port-forward api-5df6bcc597-2djfx 8080:8080`


*Note*
To use annotations in LoadBalancer Service type to deploy NLB instead of Classinc LOB deployed otherwise.

Better approach is to use Ingress along with Ingress controllers for advance routing mechanisms based on path, domains and subdomains.