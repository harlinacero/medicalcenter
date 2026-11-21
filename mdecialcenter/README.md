# Medical Center — Frontend

Medical Center is an application for managing medical appointments. It is built with React.js on the frontend and .NET 8 on the backend.

The frontend lets users interact with the application’s graphical interface, which follows recommended design, accessibility, and usability criteria.

### Frontend setup (React.js)

1. Go to the frontend folder:

```
cd mdecialcenter
```

2. Install the dependencies:

```
npm install
```

3. Start the application:

```
npm start
```

The application will be available at http://localhost:3000.

### Deployment

To build the application for production, run:

```
npm run build
```

This will generate a `build` folder that you can deploy to any web server.

### Architecture

The frontend architecture uses a modular folder layout, following common React.js and other UI-framework practices.

The application folder structure (`mdecialcenter`) is as follows:

```
mdecialcenter/
├── public/                     # Public files (index.html, favicon, etc.)
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # Application icon
│   └── static/                 # Static files generated at build time
├── src/                        # Application source code
│   ├── assets/                 # Images, icons, and other resources
│   ├── components/             # Reusable components
│   ├── config/                 # Configuration files
│   ├── models/                 # Object models or interfaces
│   ├── pages/                  # Main pages
│   │   ├── home/               # Home
│   │   ├── affliliates/        # Affiliates
│   │   ├── affiliations/       # Affiliations
│   │   ├── carenetwork/        # Care network
│   │   ├── employers/          # Employers
│   │   ├── contact/            # Contact us
│   │   ├── login/              # Sign in
│   │   ├── patient/            # Patient module
│   │   │   ├── home/           # Patient home
│   │   │   ├── register/       # Registration form
│   │   │   ├── appoiments/     # Appointment management
│   │   │   └── createApppoiments/ # Form to create appointments
│   │   └── doctor/             # Doctor module
│   ├── services/               # Services for API calls
│   ├── utils/                  # Utilities and helper functions
│   ├── styles/                 # Global style files
│   ├── App.tsx                 # Main application component
│   └── index.tsx               # Application entry point
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
```

### Notes

- **`public/`**: Contains static files that do not go through the compilation process. `index.html` is the main template.
- **`src/`**: Contains all application source code, including components, pages, services, and styles.
- **`components/`**: Contains reusable components such as buttons, forms, and so on.
- **`pages/`**: Contains the main views of the application, organized by module (for example, `patient` and `doctor`).
- **`services/`**: Contains functions for interacting with the backend API.
- **`utils/`**: Contains helper functions and utilities.
- **`styles/`**: Contains global and application-specific styles.

### Navigation

The navigation map is a visual description of the flow across screens and menus. For this section, the application is split into three parts: the home page, the sign-in and registration section, and the pages for registered users.

#### Pages for unregistered users

The home page is the entry point to the system. It is the set of menus with informational sections that any user can open without signing in. It includes Home, Affiliations, Affiliates, Employers, Care network, and Contact us.

![Navigation map for unregistered users](<medicalcenter-Mapa de navegacion 1.png>)

#### Sign-in and registration

Sign-in, as the entry point for registered users or people who want to register, has the following navigation.

![Sign-in and registration navigation map](<medicalcenter-Mapa de navegación 2.drawio.png>)

### Pages for registered users

Registered users each have their own navigation, depending on their profile (patient, doctor, or administrator):

![Patient navigation map](<medicalcenter-Mapa de navegación paciente.drawio.png>)
