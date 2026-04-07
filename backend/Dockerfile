# Stage 1: Base dependencies
FROM node:22-alpine AS base
WORKDIR /app
RUN apk update && apk upgrade
COPY package*.json ./
RUN npm install
RUN chown -R node:node /app
USER node

# Stage 2: Development
FROM base AS development
COPY --chown=node:node . .
EXPOSE 5000
CMD ["npm", "run", "dev"]

# Stage 3: Production
FROM base AS production
COPY --chown=node:node . .
EXPOSE 5000
CMD ["npm", "start"]
