# Demo Captive Portal

This is a small app that we use in combination with [traefik's forward auth](https://doc.traefik.io/traefik/middlewares/http/forwardauth/) to inform people about the terms and conditions when using demo.hedgedoc.org

## use in treafik

Add this middleware config

```toml
[http.middlewares.demoTosAccept.forwardAuth]
    address="http://demoTosAccept:3000"
    addAuthCookiesToResponse="demoTosAccepted"
    authRequestHeaders="Cookie"
```
