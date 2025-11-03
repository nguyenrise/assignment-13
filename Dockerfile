# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build the app for production
RUN npm run build-storybook

# Expose port 8083
EXPOSE 8083

# Serve the static files
CMD ["npx", "http-server", "storybook-static", "-p", "8083"]
