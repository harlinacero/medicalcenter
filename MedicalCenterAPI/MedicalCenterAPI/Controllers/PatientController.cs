using MedicalCenterDomain.Entities;
using MedicalCenterDomain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MedicalCenterAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _userService;

        public PatientController(IPatientService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Authorize(Roles = "Patient" )]
        public async Task<IActionResult> CreatePatientAsync(Patient user)
        {
            try
            {
                var patient = await _userService.CreatePatientAsync(user);
                return Ok(patient);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Authorize(Roles = "Patient")]
        public async Task<IActionResult> UpdatePatientAsync(Patient user)
        {
            try
            {
                var patient = await _userService.UpdatePatientAsync(user);
                return Ok(patient);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{userId}")]
        [Authorize(Roles = "Patient")]
        public async Task<IActionResult> GetPatientAsync(int userId)
        {
            try
            {
                var patient = await _userService.GetPatientByIdAsync(userId);
                return Ok(patient);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
