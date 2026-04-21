FROM node:latest
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./
RUN rm -rf package-lock.json && \
    npm cache clean --force && \ 
    npm i -g npm@latest && \
    npm i --legacy-peer-deps


# Copy the rest of your application code
COPY . .

CMD ["npm", "test"]