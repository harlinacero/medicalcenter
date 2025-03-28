namespace MedicalCenterAPI.DTOs
{
    /// <summary>
    /// Data transfer object para el registro de un usuario
    /// </summary>
    public class RegisterDto: LoginDto
    {
        /// <summary>
        /// Nombre de usuario
        /// </summary>
        public string Username { get; set; }
    }
}
