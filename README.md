# GecSurvey_srv

Backend en JavaScript (Node.js) para la aplicación GecSurvey. Provee API REST para recibir y almacenar respuestas de encuestas de seguridad.

## Tecnologías
- JavaScript (Node.js)

## Instalación
1. Clonar este repositorio.
2. Instalar dependencias:
npm install

markdown
Copiar
Editar
3. Configurar variables según `.env` (ej. BASE_URL, puerto, base de datos).
4. Iniciar servidor:
npm start

markdown
Copiar
Editar

## Uso
Expone endpoints REST como:
- `POST /encuesta`: recibir datos de encuesta.
- `GET /status`: revisar estado del servidor.

## Estructura del proyecto
- `src/`: código fuente del servidor.
- `.env`: configuración de entorno.

## Autores
Proyecto parte del programa de vinculación con la Universidad ESPE.

## Licencia
Uso académico interno.
