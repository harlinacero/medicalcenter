using MedicalCenterDomain.Entities;

namespace MedicalCenterDomain.Services.Interfaces
{
    public interface IPatientService
    {
        /// <summary>
        /// Get all patients
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<Patient>> GetAllPatientsAsync();
        /// <summary>
        /// Get a patient by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Patient> GetPatientByIdAsync(int id);
        /// <summary>
        /// Create a new patient
        /// </summary>
        /// <param name="patient"></param>
        /// <returns></returns>
        Task<Session> CreatePatientAsync(Patient patient);
        /// <summary>
        /// Update a patient
        /// </summary>
        /// <param name="patient"></param>
        /// <returns></returns>
        Task<Patient> UpdatePatientAsync(Patient patient);
        /// <summary>
        /// Delete a patient
        /// </summary>
        /// <param name="patient"></param>
        /// <returns></returns>
        Task<Patient> DeletePatientAsync(Patient patient);
    }
}
