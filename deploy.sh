#!/bin/bash

# Go to the app's directory
cd /my-app
# Pull the latest changes from the repository
git pull origin main

# Install Node.js dependencies
npm install

# Build the Next.js app
npm run build

# Restart the Node.js server (replace 'your_nextjs_app_port' with the actual port)
pm2 stop your_nextjs_app_port
pm2 start npm --name "my_app" -- run start --port=3000
