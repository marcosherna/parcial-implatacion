CREATE TABLE estudiantes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  codigo VARCHAR(20)
);

INSERT INTO estudiantes (nombre, codigo)
VALUES ('Marcos Ramos', 'COD6789');

SELECT * FROM estudiantes;
