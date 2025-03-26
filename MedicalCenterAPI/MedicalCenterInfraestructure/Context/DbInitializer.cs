using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace MedicalCenterInfraestructure.Context
{
    public static class DbInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MyDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<MyDbContext>>()))
            {
                // Look for any users.
                CreateDefaultDocumentsType(context);
                CreateDefaultGenders(context);
                CreateDefaultCivilStatus(context);
                CreateDefaultDisabilities(context);
                CreateDefaultDepartments(context);
                CreateDefaultCities(context);
                CreateDefaultRoles(context);
                CreateDefaultSpecialities(context);
                CreateDefaultUser(context);

                context.SaveChanges();
            }
        }

        private static void CreateDefaultSpecialities(MyDbContext context)
        {
            if (context.Specialities.Any())
            {
                return;   // DB has been seeded
            }

            context.Specialities.AddRange(
                new Speciality(SpecialityEnum.Cardiologist.GetHashCode(), "Cardiología"),
                new Speciality(SpecialityEnum.Pediatrician.GetHashCode(), "Pediatría"),
                new Speciality(SpecialityEnum.Nephrologist.GetHashCode(), "Neurología"),
                new Speciality(SpecialityEnum.Ophthalmologist.GetHashCode(), "Oftalmología"),
                new Speciality(SpecialityEnum.Dermatologist.GetHashCode(), "Dermatología")
            );
        }

        private static void CreateDefaultGenders(MyDbContext context)
        {
            if (context.Genders.Any())
            {
                return;   // DB has been seeded
            }

            context.Genders.AddRange(
                new Gender(GenderEnum.Male.GetHashCode(), "Masculino"),
                new Gender(GenderEnum.Female.GetHashCode(), "Femenino")
                );
        }

        private static void CreateDefaultCities(MyDbContext context)
        {
            if (context.Cities.Any())
            {
                return;   // DB has been seeded
            }

            context.Cities.AddRange(
                new City(1, "Bogotá", 1),
                new City(2, "Medellín", 2),
                new City(3, "Barranquilla", 3),
                new City(4, "Cartagena", 4),
                new City(5, "Popayán", 5)
            );
        }

        private static void CreateDefaultDisabilities(MyDbContext context)
        {
            if (context.Disabilities.Any())
            {
                return;   // DB has been seeded
            }

            context.Disabilities.AddRange(
                new Disability(1, "Ninguna"),
                new Disability(2, "Visual"),
                new Disability(3, "Auditiva"),
                new Disability(4, "Física"),
                new Disability(5, "Mental")
            );
        }

        private static void CreateDefaultCivilStatus(MyDbContext context)
        {
            if (context.CivilStatuses.Any())
            {
                return;   // DB has been seeded
            }

            context.CivilStatuses.AddRange(
                new CivilStatus(1, "Soltero"),
                new CivilStatus(2, "Casado"),
                new CivilStatus(3, "Divorciado"),
                new CivilStatus(4, "Viudo")
            );
        }

        private static void CreateDefaultDepartments(MyDbContext context)
        {
            if (context.Departments.Any())
            {
                return;   // DB has been seeded
            }

            context.Departments.AddRange(
                new Department(1, "Cundinamarca"),
                new Department(2, "Antioquia"),
                new Department(3, "Atlántico"),
                new Department(4, "Bolivar"),
                new Department(5, "Cauca")
                );
        }

        private static void CreateDefaultDocumentsType(MyDbContext context)
        {
            if (context.DocumentTypes.Any())
            {
                return;   // DB has been seeded
            }

            context.DocumentTypes.AddRange(
                new DocumentType(1, "Cédula de Ciudadanía", "CC"),
                new DocumentType(2, "Tarjeta de Identidad", "TI"),
                new DocumentType(3, "DNI", "DNI"),
                new DocumentType(4, "Pasaporte", "Pte"),
                new DocumentType(5, "Carnet de Extranjería", "CE")
            );
        }

        private static void CreateDefaultRoles(MyDbContext context)
        {
            if (context.Roles.Any())
            {
                return;   // DB has been seeded
            }

            context.Roles.AddRange(
                new Role
                {
                    Id = RoleEnum.Admin.GetHashCode(),
                    Name = "Admin",
                    Menus = GetMenuAdmin()
                },
                new Role
                {
                    Id = RoleEnum.Patient.GetHashCode(),
                    Name = "Patient",
                    Menus = GetMenuPatient()
                },
                new Role
                {
                    Id = RoleEnum.Doctor.GetHashCode(),
                    Name = "Doctor",
                    Menus = GetMenuDoctor()
                }
            );
        }

        private static ICollection<MenuRoute> GetMenuAdmin()
        {
            return GetMenu(
            [
                new MenuRoute { Id = 1, Name = "Dashboard", Url = "/dashboard" },
                new MenuRoute { Id = 2, Name = "Usuarios", Url = "/users" },
                new MenuRoute { Id = 3, Name = "Pacientes", Url = "/patients" },
                new MenuRoute { Id = 4, Name = "Doctores", Url = "/doctors" },
                new MenuRoute { Id = 5, Name = "Especialidades", Url = "/specialities" },
                new MenuRoute { Id = 6, Name = "Citas", Url = "/appointments" },
                new MenuRoute { Id = 7, Name = "Historias Clínicas", Url = "/records" }
            ]);
        }

        private static ICollection<MenuRoute> GetMenuPatient()
        {
            return GetMenu(
            [
                new MenuRoute { Id = 8, Name = "Inicio", Url = "/phome" },
                new MenuRoute { Id = 9, Name = "Citas", Url = "/appointments" },
                new MenuRoute { Id = 10, Name = "Resultados Médicos", Url = "/medicalresults" },
                new MenuRoute { Id = 11, Name = "Autorizaciones", Url = "/authorizations" },
                new MenuRoute { Id = 12, Name = "Medicamentos", Url = "/meications" },
                new MenuRoute { Id = 13, Name = "Asesor en Línea", Url = "/onlineadvisor" },
                new MenuRoute { Id = 14, Name = "Vacunación", Url = "/vaccination" }
            ]);
        }

        private static ICollection<MenuRoute> GetMenuDoctor()
        {
            return GetMenu(
            [
                new MenuRoute { Id = 15, Name = "Inicio", Url = "/phome" },
                new MenuRoute { Id = 16, Name = "Citas", Url = "/appointments" },
                new MenuRoute { Id = 17, Name = "Historias Clínicas", Url = "/records" },
                new MenuRoute { Id = 18, Name = "Resultados Médicos", Url = "/medicalresults" },
                new MenuRoute { Id = 19, Name = "Autorizaciones", Url = "/authorizations" }
            ]);
        }

        private static ICollection<MenuRoute> GetMenu(List<MenuRoute> menus)
        {
            return menus;
        }
        private static void CreateDefaultUser(MyDbContext context)
        {
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }

            context.Users.AddRange(
               new User
               {
                   Id = 1,
                   UserName = "Admin",
                   Email = "admin@mail.com",
                   Password = "admin123",
                   FirstName = "Admin",
                   LastName = "Admin",
                   GenderId = GenderEnum.Male.GetHashCode(),
                   DocumentTypeId = 1,
                   Document = "1111",
                   BirthDate = new DateOnly(1990, 1, 1),
                   CityId = 1,
                   Address = "Calle 123",
                   AddressComplement = "Apto 123",
                   Phone = "1234567",
                   MobilePhone = "1234567",
                   EmergencyContactName = "Contacto",
                   EmergencyContactPhone = "1234567",
                   EmergencyContactRelationShip = "Parentesco",
                   RoleId = RoleEnum.Admin.GetHashCode()
               },
               new Patient
               {
                   Id = 2,
                   UserName = "Harlin",
                   Email = "harlin@mail.com",
                   Password = "harlin123",
                   FirstName = "Harlin",
                   LastName = "Acero",
                   GenderId = GenderEnum.Male.GetHashCode(),
                   DocumentTypeId = 1,
                   Document = "3333",
                   BirthDate = new DateOnly(1990, 1, 1),
                   CivilStatusId = 1,
                   DisabilityId = 1,
                   CityId = 1,
                   Address = "Calle 222",
                   AddressComplement = "Apto 1003",
                   Phone = "31238846",
                   MobilePhone = "31238846",
                   EmergencyContactName = "Marlen",
                   EmergencyContactPhone = "13213212",
                   EmergencyContactRelationShip = "madre",
                   RoleId = RoleEnum.Patient.GetHashCode()
               },
               new Doctor
               {
                   Id = 3,
                   UserName = "Walter",
                   Email = "walter@mail.com",
                   Password = "walter123",
                   FirstName = "Walter",
                   LastName = "Fuertes",
                   GenderId = GenderEnum.Male.GetHashCode(),
                   DocumentTypeId = 1,
                   Document = "2222",
                   BirthDate = new DateOnly(1990, 1, 1),
                   CityId = 1,
                   Address = "Calle 222",
                   AddressComplement = "Apto 1003",
                   Phone = "31238846",
                   MobilePhone = "",
                   EmergencyContactName = "Marlen",
                   EmergencyContactPhone = "13213212",
                   EmergencyContactRelationShip = "madre",
                   RoleId = RoleEnum.Doctor.GetHashCode(),
                   SpecialityId = SpecialityEnum.Cardiologist.GetHashCode()
               }
           );
        }
    }
}
