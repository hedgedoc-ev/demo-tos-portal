# Demo Captive Portal

This is a small app that we use in combination with [traefik's forward auth](https://doc.traefik.io/traefik/middlewares/http/forwardauth/) to inform people about the terms and conditions when using demo.hedgedoc.org

## Use in treafik

Spin up a container using the image "ghcr.io/hedgedoc-ev/demo-tos-portal:main" and add this middleware config:

```toml
[http.middlewares.demoTosAccept.forwardAuth]
    address="http://demoTosAccept"
    authRequestHeaders="Cookie"
```
