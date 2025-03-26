using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Enums;
using MedicalCenterDomain.Repository;
using MedicalCenterDomain.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Text;

namespace MedicalCenterDomain.Services
{
    public class AuthService : IAuthService
    {
        private readonly IRepository<User> _repository;
        private readonly IRepository<Role> _roleRepository;
        private readonly string _jwtSecret;
        private readonly string _jwtIssuer;
        public AuthService(IRepository<User> repository, IConfiguration configuration, IRepository<Role> roleRepository)
        {
            _repository = repository;
            _jwtSecret = configuration["Jwt:Key"];
            _jwtIssuer = configuration["Jwt:Issuer"];
            _roleRepository = roleRepository;
        }
        public async Task<Session> LoginAsync(string document, string password)
        {
            var user = await _repository.GetByParameterAsync(x => x.Document.Equals(document, StringComparison.OrdinalIgnoreCase)) ?? throw new Exception("Usuario no encontrado");
            if (user.Password != password)
            {
                throw new Exception("Contraseña incorrecta");
            }

            var token = GenerateToken(user);

            return new Session(user.Id, user.UserName, user.Role, token);
        }

        public async Task<Session> RegisterAsync(string username, string document, string password)
        {
            var userExist = await _repository.GetByParameterAsync(x =>
                x.UserName.Equals(username, StringComparison.OrdinalIgnoreCase) ||
                x.Document.Equals(document, StringComparison.OrdinalIgnoreCase));
            if (userExist != null)
            {
                throw new Exception($"El usuario {username} ya existe");
            }
            var role = await _roleRepository.GetByIdAsync(RoleEnum.Patient.GetHashCode());
            var user = new User()
            {
                Id = 0,
                UserName = username,
                FirstName = "",
                LastName = "",
                Email = "",
                Document = document,
                Password = password,
                Role = role
            };
            var token = GenerateToken(user);
            return new Session(0, username, role, token);
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("userId", user.Id.ToString()),
                new Claim("userName", user.UserName),
                new Claim("firstName", user.FirstName),
                new Claim("lastName", user.LastName),
                new Claim("roleName", user.Role.Name),
                new Claim("roleId", user.RoleId.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Role, user.Role.Name)
            };

            var token = new JwtSecurityToken(
                issuer: _jwtIssuer,
                audience: _jwtIssuer,
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    }
}
