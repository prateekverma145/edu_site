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

# Expose frontend port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "run", "dev"]
