using MedicalCenterDomain.Entities;

namespace MedicalCenterDomain.Services.Interfaces
{
    public interface IAuthService
    {
        /// <summary>
        /// Login a user
        /// </summary>
        /// <param name="document"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        Task<Session> LoginAsync(string document, string password);
        /// <summary>
        /// Register a new user
        /// </summary>
        /// <param name="username"></param>
        /// <param name="document"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        Task<Session> RegisterAsync(string username, string document, string password);
    }
}
