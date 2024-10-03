FROM nginx:1.27.2

COPY tos.html /usr/share/nginx/html/tos.html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE "80/tcp"
