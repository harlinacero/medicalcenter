using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Enums;
using MedicalCenterDomain.Repository;
using MedicalCenterDomain.Services.Interfaces;

namespace MedicalCenterDomain.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepository<Patient> _patientRepository;
        private readonly IAuthService _authService;

        public PatientService(IRepository<Patient> patientRepository, IAuthService authService)
        {
            _patientRepository = patientRepository;
            _authService = authService;
        }

        public async Task<Session> CreatePatientAsync(Patient patient)
        {
            patient.RoleId = RoleEnum.Patient.GetHashCode();
            
            var newPatient = await _patientRepository.CreateAsync(patient);
            return await _authService.LoginAsync(newPatient.Document, newPatient.Password);
        }

        public async Task<Patient> DeletePatientAsync(Patient patient)
        {
            return await _patientRepository.DeleteAsync(patient);
        }

        public async Task<IEnumerable<Patient>> GetAllPatientsAsync()
        {
            return await _patientRepository.GetAllAsync();
        }

        public async Task<Patient> GetPatientByIdAsync(int id)
        {
            return await _patientRepository.GetByIdAsync(id);
        }

        public Task<Patient> UpdatePatientAsync(Patient patient)
        {
            return _patientRepository.UpdateAsync(patient);
        }
    }
}
