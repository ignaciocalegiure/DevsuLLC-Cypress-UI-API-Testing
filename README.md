# Devsu LLC - Cypress project - UI and API - Testing
Bienvenidos a este proyecto de pruebas de UI y API Rest con Cypress.

## Instrucciones de ejecucion - ambos proyectos

Clonar este repositorio o descomprimir el archivo zip

Correr los siguientes comandos:

```
npm install
```

```
npm run runner
```

Este ultimo ejecutara un script ya creado en package.json

## Conclusiones

### UI Testing 

Para esta prueba elegi la opcion 1 cumpliendo con el siguiente ejercicio:

Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra en la pagina https://www.demoblaze.com/ que incluya:
* Agregar dos productos al carrito
* Visualizar el carrito
* Completar el formulario de compra
* Finalizar la compra

#### Comentarios

La pagina cuenta con errores visuales y esteticos. Sin embargo a simple vista el proceso probado parece funcionar correctamente. Unicamente se encontro que, al completar el formulario de venta y presionar en "purchase", se despliegua un pop up con numero de transaccion y algunos datos del comprador. Si se presiona con cierta velocidad al boton de OK, el pop up desaparece pero no te redirige al home de la pagina. Permitiendote volver a presionar en purchase y realizar una segunda compra.
Otro inconveniente fue la velocidad de ejecucion de cypress, por lo que, para evitar el problema mencionado anteriormente se tuvo que aplicar el uso de cy.wait(). 

### API Rest Testing

Para esta prueba elegi la opcion 3 cumpliendo con el siguiente ejercicio:

La pagina https://petstore.swagger.io/ proporciona la documentacion sobre apis de una "PetStore".
Utilizando un software de pruebas de servicios REST realizar las siguientes pruebas, identificando las entradas, capturando las salidas, test, variables, etc, en cada de los siguientes pasos:
* Crear un usuario
* Buscar un usuario creado
* Actualizar el nombre y el correo del usuario
* Buscar usuario actualizado
* Eliminar el usuario

#### Comentarios

Los servicios parecen funcionar correctamente y se realizo, en diferentes casos dependientes uno del otro el flujo mencionado utilizando cada uno de los servicios. Sin embargo se detecto que al utilizar el servicio de /user/{username} metodo PUT se duplica el usuario en la base de datos. Tal es asi, que luego de ejecutar la consulta al servicio /user/{username}  metodo DELETE permite ejecutarlo 2 y devuelve 200 en cada una de ellas producto de este error. Por otro lado, tambien afecta a la consulta del servicio /user/{username} metodo GET cuando se realizo una modificacion ya que el usuario creado original se mantiene y es el retorna dicho servicio, pero a su vez el usuario modificado se encuentra disponible una vez eliminado el original.