using MedicalCenterDomain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MedicalCenterAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppoimentController : ControllerBase
    {
        /// <summary>
        /// Obtiene todas las citas del usuario logueado
        /// </summary>
        /// <returns></returns>
        [HttpGet("{userId}")]
        [Authorize]
        public async Task<IActionResult> GetAllAppoimentsAsync()
        {
            return Ok();
        }

        /// <summary>
        /// Obtiene la información de una cita específica
        /// </summary>
        /// <param name="appoimentId"></param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAppoimentAsync(int appoimentId)
        {
            return Ok();
        }

        /// <summary>
        /// Crea una nueva cita médica
        /// </summary>
        /// <param name="appoiment"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Patience")]
        public async Task<IActionResult> CreateAppoimentAsync(Appoiment appoiment)
        {
            return Ok();
        }

        /// <summary>
        /// Actualiza la información de una cita médica
        /// </summary>
        /// <param name="appoiment"></param>
        /// <returns></returns>
        [HttpPut]
        [Authorize(Roles = "Patience")]
        public async Task<IActionResult> UpdateAppoimentAsync(Appoiment appoiment)
        {
            return Ok();
        }



    }
}