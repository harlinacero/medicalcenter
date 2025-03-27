# Medical Center

Medical Center es una aplicación para la gestión de citas médicas. La aplicación está creada con las tecnologías React.js para el frontend y .NET 8 para el backend.

El frontend de la aplicación permite al usuario interactuar con la interfaz gráfica de la aplicación, la cual sigue los criterios de diseño, accesibilidad y usabilidad recomendados.

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

### Arquitectura
La arquitectura del frontend contiene una organización modular siguiendo las prácticas de react.js y otros frameworks para frontend. 
La estructura de carpetas de la app (`mdecialcenter`) es la siguiente.

```
mdecialcenter/
├── public/                     # Archivos públicos (index.html, favicon, etc.)
│   ├── index.html              # Archivo HTML principal
│   ├── favicon.ico             # Ícono de la aplicación
│   └── static/                 # Archivos estáticos generados en el build
├── src/                        # Código fuente de la aplicación
│   ├── assets/                 # Imágenes, íconos  y otros
│   ├── components/             # Componentes reutilizables
│   ├── config/                 # Archivos de configuración
│   ├── models/                 # Modelos o interfaces de los objetos
│   ├── pages/                  # Páginas principales
│   │   ├── home/               # Inicio
│   │   ├── affliliates/        # Afiliados
│   │   ├── affiliations/       # Afiliaciones
│   │   ├── carenetwork/        # Red de atenión
│   │   ├── employers/          # Empleadores
│   │   ├── contact/            # Contáctanos
│   │   ├── login/              # Login
│   │   ├── patient/            # Módulo del paciente
|   │   │   ├── home/           # Home del paciente
|   │   │   ├── register/       # Formulario de registro
|   │   │   ├── appoiments/     # Gestión de citas
|   │   │   └── createApppoiments/ # Formulario para creación de citas
│   │   └── doctor/             # Módulo de médicos
│   ├── services/               # Servicios para llamadas a la API
│   ├── utils/                  # Utilidades y funciones auxiliares
│   ├── styles/                 # Archivos de estilos globales
│   ├── App.tsx                 # Componente principal de la aplicación
│   └── index.tsx               # Punto de entrada de la aplicación
├── .env                        # Variables de entorno
├── package.json                # Dependencias y scripts del proyecto
├── tsconfig.json               # Configuración de TypeScript
```

### Notas:
- **`public/`**: Contiene archivos estáticos que no pasan por el proceso de compilación. El archivo `index.html` es la plantilla principal.
- **`src/`**: Contiene todo el código fuente de la aplicación, incluyendo componentes, páginas, servicios y estilos.
- **`components/`**: Contiene componentes reutilizables como botones, formularios, etc.
- **`pages/`**: Contiene las vistas principales de la aplicación, organizadas por módulos (por ejemplo, `patient` y `doctor`).
- **`services/`**: Contiene funciones para interactuar con la API del backend.
- **`utils/`**: Contiene funciones auxiliares y utilidades.
- **`styles/`**: Contiene los estilos globales y específicos de la aplicación.


### Navegabilidad
En el mapa de navegación se hace una breve descripción visual del flujo de las diferentes pantallas y Menus. Para esta parte, se ha separado la aplicación en tres partes: la página de inicio, la sección de login y registro, y la página del usuario registrado.

#### Páginas del usuario no registrado
La página de inicio es la entrada al sistema. Como se ha mencionado, es el conjunto de menús que contienen secciones informativas a las que cualquier usuario puede acceder sin necesidad de loguearse en el sitio. Está formada por los menús de Inicio, Afiliaciones, Afiliados, Empleadores, Red de atención y Contáctanos. 

![alt text](<medicalcenter-Mapa de navegacion 1.png>)

#### Login y Registro
El Login como entrada al sistema para usuarios registrados u usuarios que desean registrarse tiene la siguiente navegabilidad.

![alt text](<medicalcenter-Mapa de navegación 2.drawio.png>)

### Páginas del usuario registrado
Los usuarios registrados, según su perfil (paciente, médico o administrador), cuentan cada uno con su propia navegabilidad:

![alt text](<medicalcenter-Mapa de navegación paciente.drawio.png>)
