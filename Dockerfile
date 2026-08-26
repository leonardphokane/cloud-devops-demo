FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json from app folder
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY app ./

# Expose port 8080 (not 3000)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
