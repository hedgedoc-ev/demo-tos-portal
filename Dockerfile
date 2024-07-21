FROM nginx:1.27.0

COPY tos.html /usr/share/nginx/html/tos.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE "80/tcp"
