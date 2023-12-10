FROM node:18

# Working dir
WORKDIR ./microservice-ensigant/

# Copy Package Json Files
COPY package*.json ./

# Install Prettier ( for out package's build function)
RUN npm install prettier -g

# Install files
RUN npm install \
    npm install eureka-js-client --save

# Copy Source Files
Copy . .

# Build
#RUN npm run build

#Expose the API Port
EXPOSE 3000
CMD ["npm", "start"]
