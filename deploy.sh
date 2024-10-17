#!/bin/bash

# Exit the script on error
set -e

# Update and install necessary packages
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl nginx

# Install Node.js and NPM (LTS version)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Verify if npm is installed, if not, install it
if ! command -v npm &> /dev/null; then
    echo "npm not found, installing npm..."
    sudo apt install -y npm
else
    echo "npm is already installed."
fi

# Install PM2 globally
sudo npm install -g pm2


# Install dependencies
npm install

# Start the app using PM2
pm2 start src/app.js --name my-app  # You can give a name to your app
pm2 save
pm2 startup systemd
sudo systemctl enable pm2-$(whoami)

# Setup Nginx
sudo rm -f /etc/nginx/sites-enabled/default
sudo tee /etc/nginx/sites-available/vb9575v <<EOF
server {
    listen 80;
    server_name vb9575v.net www.vb9575v.net;

    location / {
        proxy_pass http://localhost:3006;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    listen [::]:80;
    return 301 https://\$host\$request_uri;  # Redirect HTTP to HTTPS
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name vb9575v.net www.vb9575v.net;

    ssl_certificate /etc/letsencrypt/live/vb9575v.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vb9575v.net/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3006;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/vb9575v /etc/nginx/sites-enabled/vb9575v

# Test Nginx configuration for syntax errors
sudo nginx -t

# Restart Nginx to apply changes
sudo systemctl restart nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx

# Obtain and configure SSL certificate
sudo certbot --nginx -d vb9575v.net -d www.vb9575v.net

# Set up auto-renewal for SSL
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

echo "Node.js app has been deployed successfully with SSL on vb9575v.net"
