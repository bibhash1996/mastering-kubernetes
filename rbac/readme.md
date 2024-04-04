# RBAC in kubernetes


helpful kubectl command to find if the service account perform the given action
`kubectl auth can-i --as system:serviceaccount:rbac-test:foo get pods -n rbac-test`