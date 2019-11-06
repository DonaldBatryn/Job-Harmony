
FROM node:11-alpine
RUN mkdir -p /app
# set working directory
WORKDIR /app

# environment vars must be included in dockerfile
ARG NODE_ENV=production


ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /app/package.json
COPY . /app
# silent so we don't have to watch the whole thing download everytime
RUN npm install --silent
EXPOSE 8080
# Start application
CMD ["npm", "start"]




