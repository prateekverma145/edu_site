# Use Node.js LTS version
FROM node:20.14.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the backend port
EXPOSE 4000

# Ensure backend listens on all interfaces
ENV HOST=0.0.0.0

# Start the backend server
CMD ["npm", "run", "dev"]
