using MedicalCenterDomain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MedicalCenterAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorController : ControllerBase
    {
        /// <summary>
        /// Crea un nuevo doctor en la plataforma
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateDoctorAsync(Doctor user)
        {
            return Ok(user);
        }

        /// <summary>
        /// Actualiza la información de un doctor
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPut]
        [Authorize(Roles = "Admin, Doctor")]
        public async Task<IActionResult> UpdateDoctorAsync(Doctor user)
        {
            return Ok();
        }

        /// <summary>
        /// Obtiene un doctor de la plataforma
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet("{userId}")]
        [Authorize(Roles = "Doctor, Admin")]
        public async Task<IActionResult> GetDoctorAsync(int userId)
        {
            return Ok(userId);
        }

        /// <summary>
        /// Obtiene todos los doctores de la plataforma
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllDoctorsAsync()
        {
            return Ok();
        }
    }
}