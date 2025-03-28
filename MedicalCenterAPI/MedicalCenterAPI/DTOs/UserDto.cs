namespace MedicalCenterAPI.DTOs
{
    /// <summary>
    /// Data transfer object para un usuario
    /// </summary>
    public class UserDto
    {
        /// <summary>
        /// Identificador del usuario
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Nombre de usuario
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// Correo electrónico del usuario
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Contraseña del usuario
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// Nombre del usuario
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// Apellido del usuario
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// Género del usuario
        /// </summary>
        public int GenderId { get; set; }
        /// <summary>
        /// Tipo de documento del usuario
        /// </summary>
        public int DocumentTypeId { get; set; }
        /// <summary>
        /// Número de documento del usuario
        /// </summary>
        public string Document { get; set; }
        /// <summary>
        /// Fecha de nacimiento del usuario
        /// </summary>
        public DateOnly BirthDate { get; set; }
        /// <summary>
        /// Ciudad de residencia del usuario
        /// </summary>
        public int? CityId { get; set; }
        /// <summary>
        /// Dirección de residencia del usuario
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// Complemento de la dirección de residencia del usuario
        /// </summary>
        public string AddressComplement { get; set; }
        /// <summary>
        /// Teléfono del usuario
        /// </summary>
        public string Phone { get; set; }
        /// <summary>
        /// Celular del usuario
        /// </summary>
        public string MobilePhone { get; set; }
        /// <summary>
        /// Nombre del contacto de emergencia
        /// </summary>
        public string EmergencyContactName { get; set; }
        /// <summary>
        /// Teléfono del contacto de emergencia
        /// </summary>
        public string EmergencyContactPhone { get; set; }
        /// <summary>
        /// Parentesco del contacto de emergencia
        /// </summary>
        public string EmergencyContactRelationShip { get; set; }
        /// <summary>
        /// Rol del usuario
        /// </summary>
        public int RoleId { get; set; }
    }
}
