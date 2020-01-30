using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeesManagementAPI.Models;

namespace EmployeesManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        private readonly EmployeesManagementContext _context;

        public ManagerController(EmployeesManagementContext context)
        {
            _context = context;
        }


        // GET: api/Manager
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Manager>>> GetManagers()
        {
            return await _context.Managers.ToListAsync();
        }

        /********** More APIs that will let expand the managers operations in the application **********/
        // GET: api/Manager/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Manager>> GetManager(int id)
        {
            var manager = await _context.Managers.FindAsync(id);

            if (manager == null)
            {
                return NotFound();
            }

            return manager;
        }


        // PUT: api/Manager/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutManager(int id, Manager manager)
        {
            if (id != manager.ManagerID)
            {
                return BadRequest();
            }

            _context.Entry(manager).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ManagerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // POST: api/Manager
        [HttpPost]
        public async Task<ActionResult<Manager>> PostManager(Manager manager)
        {
            _context.Managers.Add(manager);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetManager", new { id = manager.ManagerID }, manager);
        }


        // DELETE: api/Manager/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Manager>> DeleteManager(int id)
        {
            var manager = await _context.Managers.FindAsync(id);
            if (manager == null)
            {
                return NotFound();
            }

            _context.Managers.Remove(manager);
            await _context.SaveChangesAsync();

            return manager;
        }

        private bool ManagerExists(int id)
        {
            return _context.Managers.Any(e => e.ManagerID == id);
        }
    }
}