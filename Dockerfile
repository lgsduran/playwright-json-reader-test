# Start from latest Node.js Bullseye image
FROM node:latest

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install -g npm@11.12.0 && \
    npm ci --silent --no-progress --no-audit --no-fund && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/tmp/* /root/.npm

# Copy application code
COPY . .

# Default command: run Playwright tests
CMD ["npm", "test"]
