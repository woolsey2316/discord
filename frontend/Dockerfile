# Stage 1: Base dependencies
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Development (includes dev-only tools/source)
FROM base AS development
RUN npm install --only=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]

# Stage 3: Production (final lean image)
FROM base AS production
COPY . .
RUN npm prune --production
CMD ["npm", "start"]
