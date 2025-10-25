FROM node:18-alpine

# Crear usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci --only=production

# Copiar el código
COPY . .

# Exponer puerto
EXPOSE 3000

# Ejecutar como usuario no root
USER appuser

CMD ["npm", "start"]
