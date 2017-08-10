cd /tmp

# ENV Variables that are used the the platform-service-deploy.sh script
export AWS_REGION=us-east-1
export WISHABI_ENVIRONMENT=development

export ECS_CLUSTER=services-ecs-stg
export ECS_SERVICE=moshe-hello-world-stg
export SERVICE_CONTAINER_NAME=$ECS_SERVICE
export CONTAINER_IMAGE=280159221453.dkr.ecr.us-east-1.amazonaws.com/moshe-hello-world:${CIRCLE_BRANCH}-${CIRCLE_BUILD_NUM}
export SERVICE_TOKEN=D80BA375-8BE2-4D1F-B415-EDC0CBBAE9AC

# download latest deploy script
aws s3 cp "s3://flipp-platform-development/deploy/platform-service-deploy.sh" platform-service-deploy.sh
chmod +x platform-service-deploy.sh

# Execute the deployment Scripts
./platform-service-deploy.sh
