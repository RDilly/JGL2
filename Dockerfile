
# Use below nginx version
FROM nginx:1.15.2-alpine
# Copy the build folder of the react app
COPY ./build /var/www
# Copy the ngnix configrations
COPY deployments/nginx.conf /etc/nginx/nginx.conf
# Expose it on port 80
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]

FROM node

EXPOSE 3000

COPY ./ /home/node/app

WORKDIR /home/node/app

RUN ["/usr/local/bin/npm", "install"]

CMD ["/usr/local/bin/npm", "start"]
