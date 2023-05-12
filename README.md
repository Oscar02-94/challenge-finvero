# challenge-finvero

Este proyecto es una api que Crear los endpoints necesarios para registrar una  shop, crear los productos de la shop ademas 
Crear un usuario con contraseña y este usuario puede crear un carrito de productos de la shop
Fue desarrollado con las herramientas nodejs,framework express,Docker,sequelize,PostgresSQL, utilizando las lirerias @hapi/boom para el majo de los status code,joi para los esquemas de validacion
etc... 

## Instalación

Para instalar y ejecutar la aplicación, se requiere lo siguiente:

- tener instalado nodeJs
- Levantamos Docker para correc(postgresSQL y pgadmin(nterfaz gráfica de usuario) para administrar la bases de datos PostgreSQL
- Comandos de Docker(docker-compose up -d postgres y docker-compose up -d pgadmin)
- Levantar el servidor usamos(npm run dev)
- Correr las migraciosnes con(migrations:run)

Para instalar la aplicación, sigue estos pasos:

1. Clona el repositorio Git en tu máquina local
2. Instala las dependencias del proyecto: `npm install`
3. Ejecuta la aplicación: `npm run dev`

## Uso

Una vez que la aplicación esté en ejecución, puedes acceder a ella con postmant `http://localhost:3000/api/v1`. A partir de ahí, puedes hacer lo siguiente:

- crear la tienda con el endpont [http://localhost:3000/api/v1/shops]
- pormedio del siguiente json({
	"shopName":"myStore",
	"image":"https://ejemplo",
	"email":"ejemplo@mail.com"
})
- Crear un usuario con el siguiente endpoint [http://localhost:3000/api/v1/users]
- por medio del pormedio del siguiente json(
- "firstName": "oscar",
	"lastName":"ejemplo",
	"password":"ejemplo",
	"email":"ejemplo@gmail.com",
  "role":"costumer"
  )
  
-Crear un producto con el siguiente end-point [http://localhost:3000/api/v1/products]
pormedio del siguiente json({
    "name":"ejemplo1",
    "price":1234,
    "description": "ejemplo",
    "image": "https://ejemplo",
    "shopId": 1 (ejemplo)
})

## Desarrollo
Este proyecto fue desarrollado por [Oscar peña jimenez] para la [PRUEBA TECNICA BACKEND] de [FINVERO]

