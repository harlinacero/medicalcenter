using MedicalCenterAPI.Controllers;
using MedicalCenterAPI.DTOs;
using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace MedicalCenterAPITests.Controllers
{
    public class AuthControllerTests
    {

        private readonly Mock<IAuthService> _authServiceMock;
        private readonly AuthController _authController;

        public AuthControllerTests()
        {
            _authServiceMock = new Mock<IAuthService>();
            _authController = new AuthController(_authServiceMock.Object);
        }

        [Fact]
        public async Task LoginAsync_ValidCredentials_ReturnsOkResult()
        {
            // Arrange
            var loginDto = new LoginDto { Document = "testuser", Password = "password" };
            var role = new Role()
            {
                Id = 1,
                Name = "TestRole"
            };
            var session = new Session(1, "TestUser",  role, "token");
            _authServiceMock.Setup(service => service.LoginAsync(loginDto.Document, loginDto.Password))
                .ReturnsAsync(session);

            // Act
            var result = await _authController.LoginAsync(loginDto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(session, okResult.Value);
        }

        [Fact]
        public async Task LoginAsync_InvalidCredentials_ReturnsBadRequest()
        {
            // Arrange
            var loginDto = new LoginDto { Document = "testuser", Password = "wrongpassword" };
            _authServiceMock.Setup(service => service.LoginAsync(loginDto.Document, loginDto.Password))
                .ThrowsAsync(new System.Exception("Invalid credentials"));

            // Act
            var result = await _authController.LoginAsync(loginDto);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Invalid credentials", badRequestResult.Value);
        }

        [Fact]
        public async Task RegisterAsync_ValidData_ReturnsOkResult()
        {
            // Arrange
            var registerDto = new RegisterDto { Username = "newuser", Document = "newuserdoc", Password = "password" };
            var role = new Role()
            {
                Id = 1,
                Name = "TestRole"
            };
            var session = new Session(1, "TestUser", role, "token");
            _authServiceMock.Setup(service => service.RegisterAsync(registerDto.Username, registerDto.Document, registerDto.Password))
                .ReturnsAsync(session);
            // Act
            var result = await _authController.RegisterAsync(registerDto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(session, okResult.Value);
        }

        [Fact]
        public async Task RegisterAsync_ExistingUser_ReturnsBadRequest()
        {
            // Arrange
            var registerDto = new RegisterDto { Username = "existinguser", Document = "existinguserdoc", Password = "password" };
            _authServiceMock.Setup(service => service.RegisterAsync(registerDto.Username, registerDto.Document, registerDto.Password))
                .ThrowsAsync(new System.Exception("User already exists"));

            // Act
            var result = await _authController.RegisterAsync(registerDto);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("User already exists", badRequestResult.Value);
        }
    }
}
