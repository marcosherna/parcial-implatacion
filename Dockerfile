FROM node:18-alpine

# Crear usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Variables de entorno
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

USER appuser

CMD ["npm", "start"]
