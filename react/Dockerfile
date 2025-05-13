# Use official Nginx image to serve static files
FROM nginx:stable-alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy built React static files into Nginx directory
COPY build/ /usr/share/nginx/html

# Optional: Copy custom Nginx config for SPA routing support
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
