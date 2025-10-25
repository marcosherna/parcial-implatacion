# Parcial 2 – Integración Docker y Node.js con PostgreSQL

## Nombre del Proyecto
`parcial-docker-integrado`

---

## Descripción
Este proyecto consiste en un servicio backend desarrollado en **Node.js** usando **Express**, con **persistencia de datos en PostgreSQL**. Se encuentra completamente contenerizado mediante **Docker** y gestionado con **Docker Compose** para levantar simultáneamente la API y la base de datos.

**Funcionalidades principales:**
- API REST con endpoints para verificar estado y obtener información de estudiantes.
- Persistencia de datos en PostgreSQL con Sequelize.
- Contenerización segura usando un usuario no root.
- Integración completa mediante Docker Compose con volumen para persistencia y healthcheck en la base de datos.

---

## Tecnologías utilizadas
- **Node.js 18**
- **Express.js**
- **PostgreSQL 15 (alpine)**
- **Sequelize ORM**
- **Docker & Docker Compose**
- **Nodemon** (opcional para desarrollo)

---

## Estructura del proyecto
parcial-docker-integrado/
│
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
├── server.js
├── db.js
├── models/
│   └── Estudiante.js
├── docs/
└── evidencias/

---

## Instalación y ejecución

### 1. Clonar repositorio
```bash
git clone https://github.com/marcosherna/parcial-implatacion.git
cd parcial-docker-integrado

```

## Configurar variables de entorno
Crea un archivo .env en la raíz con el siguiente contenido:
# API
API_PORT=3000
HOST=0.0.0.0
# PostgreSQL
POSTGRES_USER=admin
POSTGRES_PASSWORD=12345
POSTGRES_DB=parcial_db
DB_HOST=db
DB_PORT=5432

## Levantar contenedores con Docker Compose
```bash
docker compose up -d --build

docker compose ps

```

## Crear tabla y registros en PostgreSQL
Acceder al contenedor de PostgreSQL:

```bash
docker exec -it parcial-db psql -U admin -d parcial_db

```
### Crear tabla estudiantes:
```bash
CREATE TABLE estudiantes(
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  codigo VARCHAR(20)
);

INSERT INTO estudiantes(nombre, codigo) VALUES ('Marcos Ramos', 'COD6789');

SELECT * FROM estudiantes;

```

## Ejecutar el backend localmente
Si estás usando el contenedor, ya está corriendo en el puerto definido en .env (API_PORT=3000).
Acceder desde navegador o curl:

curl http://localhost:3000/


 