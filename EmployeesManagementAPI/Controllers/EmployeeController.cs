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
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeesManagementContext _context;

        public EmployeeController(EmployeesManagementContext context) //here there is dependency injection
        {
            _context = context;
        }


        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }


        // GET: api/Employee/manager/{id}
        [HttpGet("manager/{id}")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeesByManager(int id)
        {
            // Query to get all the employees of a certain manager with the id 'id'
            var res = _context.Employees.FromSqlRaw("select * from employees where ManagerID=@p0", id).ToListAsync();

            return await res;
        }


        // GET: api/Employee/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }


        // PUT: api/Employee/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.EmployeeID)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                // Validation check a manager with ManagerID exists in the managers table, and that the ID includes 9 digits
                if (_context.Managers.Any(e => e.ManagerID == employee.ManagerID) && IDValidation(employee.ID))
                    await _context.SaveChangesAsync();
                else
                    throw new System.ArgumentException("Manager must be in the managers list, and ID must include 9 digits", "ManagerID");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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


        // POST: api/Employee
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            // Validation check a manager with ManagerID exists in the managers table, and that the ID includes 9 digits
            if (_context.Managers.Any(e => e.ManagerID == employee.ManagerID) && IDValidation(employee.ID))
            {
                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetEmployee", new { id = employee.EmployeeID }, employee);
            }
            else //The managers does not Exists, or the ID doesn't includes 9 digits
            {
                return BadRequest();
            }
        }


        // DELETE: api/Employee/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.EmployeeID == id);
        }

        private bool IDValidation(string ID)
        {
            int id = int.Parse(ID);
            int counter = 0;
            while(id > 0)
            {
                id /= 10;
                counter++;
            }
            if (counter == 9)
                return true;
            return false;
        }
    }
}