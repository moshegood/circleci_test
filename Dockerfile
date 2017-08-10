# FROM node:8
FROM 280159221453.dkr.ecr.us-east-1.amazonaws.com/flipp/node-base:8

EXPOSE 3000

COPY . /var/app/

WORKDIR /var/app
CMD ["npm", "start"]
