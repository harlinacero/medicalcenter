# Medical Center

Medical Center es una aplicación para la gestión de citas médicas. La aplicación está creada con las tecnologías React.js para el frontend y .NET 8 para el backend.

## Arquitectura General

La aplicación está compuesta por dos partes: el backend (C# .Net) y el fronend (React.js), los cuales siguen una arquitectura de N Capas orientada al dominio, es decir, que toda la lógica del negocio y las operaciones principales se encuentran abstraidas de las implementaciones, por lo que es indiferente si se usa una vista u otra, o el motor de base de datos que persiste la información.



La información más detallada de cada parte se encuentra en el archivo readme correspondiente.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Visual Studio](https://visualstudio.microsoft.com/) con el SDK de .NET 8 instalado
- [SQL Server](https://www.microsoft.com/en-us/sql-server) o cualquier base de datos compatible con .NET

---

## Clonar el repositorio

Para clonar el repositorio, ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/tu-usuario/medicalcenter.git
cd medicalcenter
```

## Backend 
El backend ubicado en la carpeta `MedicalCenterAPI` contiene expone los servicios (endpoints) para la autenticación, creación y edición de los usuarios médicos o pacientes y la lógica de negocio correspondiente para que esta información se almacene en una base de datos.

[Documentación del Backend](./MedicalCenterAPI/README.md)
### Configuración
1. Navega a la carpeta del backend:
```bash
cd MedicalCenterAPI
```
2. Restaura las dependencias del proyecto
```
dotnet restore
```
3. Configura la cadena de conexión a la base de datos en el archivo `appsettings.json`:

```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=TU_SERVIDOR;Database=MedicalCenterDB;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```
Asegúrate de reemplazar `TU_SERVIDOR` con el nombre de tu servidor SQL y `MedicalCenterDB` con el nombre de tu base de datos.

4. Aplica las migraciones para crear la base de datos:

```
dotnet ef database update
```
5. Ejecutar la API:
```
dotnet run
```
La API estará disponible en `https://localhost:7051` o `http://localhost:44313`

### Despliegue
Para desplegar el backend en un servidor, publica el proyecto con el siguiente comando:

```
dotnet publish -c Release -o ./publish
```
Luego, copia los archivos publicados al servidor y configura el entorno de producción.

## FrontEnd
El frontend de la aplicación está ubicado en la carpeta `mdecialcenter`. Permite al usuario interactuar con la interfaz gráfica de la aplicación, la cual sigue los criterios de diseño, accesibilidad y usabilidad recomendados.

[Documentación del Frontend](./mdecialcenter/README.md)

### Configuración del Frontend (React.js)
1. Navega a la carpeta del frontend:
```
cd mdecialcenter
```

2. Instala las dependencias:
```
npm install
```
3. Inicia la aplicación:
```
npm start
```
La aplicación estará disponible en http://localhost:3000.

### Despliegue
Para construir la aplicación para producción, ejecuta:
```
npm run build
```
Esto generará una carpeta `build` que puedes desplegar en cualquier servidor web.
