# ordersApp
Proyecto de Pedidos
Este es un proyecto de pedidos desarrollado con Node.js, Express.js, MySQL y Multer para la subida de archivos. También fue desplegado en CapRover para su fácil implementación y monitoreo.

Instalación
Para instalar este proyecto en su computadora, siga los siguientes pasos:

Clone el repositorio en su computadora local.
git clone https://github.com/kyevnieves/ordersApp.git
Navegue al directorio del proyecto y ejecute el comando npm install para instalar todas las dependencias necesarias.

Cree una base de datos MySQL y actualice las credenciales de acceso en el archivo config.js:

{
  "database": {
    "host": "localhost",
    "user": "<usuario-de-base-de-datos>",
    "password": "<contraseña-de-base-de-datos>",
    "database": "proyecto-pedidos"
  }
}

Siga los pasos en el archivo Database.sql (Ahi encontrara toda la configuracion de la base de datos)

Ejecute el comando npm start para iniciar el servidor.

Características
Este proyecto tiene las siguientes características:

Registro y autenticación de usuarios.
Creación, edición y eliminación de pedidos.
Subida de archivos adjuntos para cada pedido utilizando Multer.
Desplegado en CapRover para una fácil implementación y monitoreo.
Contribuciones
Si desea contribuir con este proyecto, simplemente realice un fork del repositorio y abra una pull request. Agradecemos cualquier aporte o sugerencia para mejorar este proyecto.

Licencia
Este proyecto está bajo la licencia MIT. Por favor, consulte el archivo LICENSE para obtener más información.

Contacto:
Keyver Nieves +584128517398
