namespace MedicalCenterAPI.DTOs
{
    /// <summary>
    /// Data transfer object para el login de un usuario
    /// </summary>
    public class LoginDto
    {
        /// <summary>
        /// Documento del usuario
        /// </summary>
        public string Document { get; set; }
        /// <summary>
        /// Contraseña del usuario
        /// </summary>
        public string Password { get; set; }
    }
}
