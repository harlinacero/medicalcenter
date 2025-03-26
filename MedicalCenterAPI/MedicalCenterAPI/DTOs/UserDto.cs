namespace MedicalCenterAPI.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int GenderId { get; set; }
        public int DocumentTypeId { get; set; }
        public string Document { get; set; }
        public DateOnly BirthDate { get; set; }
        public int? CityId { get; set; }
        public string Address { get; set; }
        public string AddressComplement { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public string EmergencyContactName { get; set; }
        public string EmergencyContactPhone { get; set; }
        public string EmergencyContactRelationShip { get; set; }
        public int RoleId { get; set; }
    }
}
