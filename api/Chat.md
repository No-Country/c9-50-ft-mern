# Que hacer para el chat

### 1. Conexion a los web socket desde front y back

- El usuario debio de realizar un login exitoso

- El backend recibira el token de authenticación y si esta correcto realizara la conexion por medio de sockets

### 2. Tener un endpoint para crear un chat, obtener un chat, y obtener todos los chats de un usuario

- Para crear un chat en necesario los **ids** de los 2 colaboradores del chat

- Verificar que no existe ningun chat con esos 2 usuario, en caso que ya exista algun chat debe de retornartelo (Opcional)

- Para obtener un chat se necesita el **id** del chat y debe regresar las informacion de los 2 usuarios y los mensajes

- Se debe comprobar que el usuario si pertenece a ese chat por medio del token (Opcional)

- Para obtener todos los chats en necesarion buscar los chats que tiene el usuario por medio del token

### 4. Por medio de socket poder enviar mensajes y conectarse a un chat

- Para poder enviarse un mensaje se necesita el texto del mensaje, el id de el usuario que lo envio y el chat al que se esta enviando

- Para poder conectarse a un chat solo el necesario el id del chat al que se quiere conectar y con el token se debe realizar una comprobacion de que el usuario pertenece a ese chat

- Crear un endpoint para obtener todos los usuarios activos y crear un endpoint para actualizar la informacion de usuario
