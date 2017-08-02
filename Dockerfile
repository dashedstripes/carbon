FROM node:8

# Install the app
RUN mkdir /app
WORKDIR /app
ADD . /app
RUN yarn
RUN yarn build

# Install Sequelize CLI
RUN npm install -g sequelize-cli
