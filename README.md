# Medical Center

Medical Center is an application for managing medical appointments. It is built with React.js on the frontend and .NET 8 on the backend.

## Overall architecture

The application has two parts: the backend (C# and .NET) and the frontend (React.js). Both follow an N-layer, domain-oriented architecture: business logic and core operations are abstracted from implementations. The UI and the database engine used for persistence can therefore change independently.

More detailed information for each part is in the corresponding README file.

## Prerequisites

Before you start, make sure the following programs are installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Visual Studio](https://visualstudio.microsoft.com/) with the .NET 8 SDK installed
- [SQL Server](https://www.microsoft.com/sql-server) or any database compatible with .NET

---

## Clone the repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/your-username/medicalcenter.git
cd medicalcenter
```

## Backend

The backend, located in the `MedicalCenterAPI` folder, exposes services (endpoints) for authentication, creating and editing doctor or patient users, and the business logic required to persist that information in a database.

[Backend documentation](./MedicalCenterAPI/README.md)

### Setup

1. Go to the backend folder:

```bash
cd MedicalCenterAPI
```

2. Restore the project dependencies:

```
dotnet restore
```

3. Configure the database connection string in `appsettings.json`:

```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=MedicalCenterDB;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

Replace `YOUR_SERVER` with your SQL server name and `MedicalCenterDB` with your database name.

4. Apply migrations to create the database:

```
dotnet ef database update
```

5. Run the API:

```
dotnet run
```

The API will be available at `https://localhost:7051` or `http://localhost:44313`.

### Deployment

To deploy the backend to a server, publish the project with the following command:

```
dotnet publish -c Release -o ./publish
```

Then copy the published files to the server and configure the production environment.

## Frontend

The application frontend is located in the `mdecialcenter` folder. It lets users interact with the graphical interface, which follows recommended design, accessibility, and usability criteria.

[Frontend documentation](./mdecialcenter/README.md)

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
