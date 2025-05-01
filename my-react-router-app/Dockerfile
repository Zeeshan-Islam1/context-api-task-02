# Step 1: Build the app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using a lightweight web server
FROM nginx:alpine

# Copy the build folder to nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
