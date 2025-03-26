using MedicalCenterAPI.Controllers;
using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace MedicalCenterAPITests.Controllers
{
    public class PatientControllerTests
    {
        private readonly Mock<IPatientService> _patientServiceMock;
        private readonly PatientController _patientController;

        public PatientControllerTests()
        {
            _patientServiceMock = new Mock<IPatientService>();
            _patientController = new PatientController(_patientServiceMock.Object);
        }

        [Fact]
        public async Task CreatePatientAsync_ValidData_ReturnsOkResult()
        {
            // Arrange
            var patient = new Patient
            {
                Id = 1,
                UserName = "testuser",
                Email = "testuser@mail.com",
                Password = "password",
                FirstName = "Test",
                LastName = "User",
                GenderId = 1,
                DocumentTypeId = 1,
                Document = "123456789",
                BirthDate = new DateOnly(1990, 1, 1),
                CityId = 1,
                Address = "Calle 123",
                AddressComplement = "Apto 123",
                Phone = "1234567",
                MobilePhone = "1234567",
                EmergencyContactName = "Contacto",
                EmergencyContactPhone = "1234567",
                EmergencyContactRelationShip = "Parentesco",
                RoleId = 2,
                CivilStatusId = 1,
                DisabilityId = 1
            };

            var role = new Role()
            {
                Id = 1,
                Name = "TestRole"
            };
            var session = new Session(1, "TestUser", role, "token");

            _patientServiceMock.Setup(service => service.CreatePatientAsync(It.IsAny<Patient>()))
                .ReturnsAsync(session);

            // Act
            var result = await _patientController.CreatePatientAsync(patient);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(session, okResult.Value);
        }

        [Fact]
        public async Task CreatePatientAsync_InvalidData_ReturnsBadRequest()
        {
            // Arrange
            var patient = new Patient
            {
                Id = 1,
                UserName = "testuser",
                Email = "testuser@mail.com",
                Password = "password",
                FirstName = "Test",
                LastName = "User",
                GenderId = 1,
                DocumentTypeId = 1,
                Document = "123456789",
                BirthDate = new DateOnly(1990, 1, 1),
                CityId = 1,
                Address = "Calle 123",
                AddressComplement = "Apto 123",
                Phone = "1234567",
                MobilePhone = "1234567",
                EmergencyContactName = "Contacto",
                EmergencyContactPhone = "1234567",
                EmergencyContactRelationShip = "Parentesco",
                RoleId = 2,
                CivilStatusId = 1,
                DisabilityId = 1
            };
            _patientServiceMock.Setup(service => service.CreatePatientAsync(It.IsAny<Patient>()))
                .ThrowsAsync(new System.Exception("Invalid data"));

            // Act
            var result = await _patientController.CreatePatientAsync(patient);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Invalid data", badRequestResult.Value);
        }

        [Fact]
        public async Task GetPatientAsync_ValidId_ReturnsOkResult()
        {
            // Arrange
            var patientId = 1;
            var patient = new Patient
            {
                Id = patientId,
                UserName = "testuser",
                Email = "testuser@mail.com",
                Password = "password",
                FirstName = "Test",
                LastName = "User",
                GenderId = 1,
                DocumentTypeId = 1,
                Document = "123456789",
                BirthDate = new DateOnly(1990, 1, 1),
                CityId = 1,
                Address = "Calle 123",
                AddressComplement = "Apto 123",
                Phone = "1234567",
                MobilePhone = "1234567",
                EmergencyContactName = "Contacto",
                EmergencyContactPhone = "1234567",
                EmergencyContactRelationShip = "Parentesco",
                RoleId = 2,
                CivilStatusId = 1,
                DisabilityId = 1
            };

            _patientServiceMock.Setup(service => service.GetPatientByIdAsync(patientId))
                .ReturnsAsync(patient);

            // Act
            var result = await _patientController.GetPatientAsync(patientId);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(patient, okResult.Value);
        }

        [Fact]
        public async Task GetPatientAsync_InvalidId_ReturnsBadRequest()
        {
            // Arrange
            var patientId = 1;
            _patientServiceMock.Setup(service => service.GetPatientByIdAsync(patientId))
                .ThrowsAsync(new System.Exception("Patient not found"));

            // Act
            var result = await _patientController.GetPatientAsync(patientId);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Patient not found", badRequestResult.Value);
        }
    }
}
