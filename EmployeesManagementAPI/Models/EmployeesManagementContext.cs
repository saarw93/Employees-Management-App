using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesManagementAPI.Models
{
    public class EmployeesManagementContext : DbContext
    {
        public EmployeesManagementContext(DbContextOptions<EmployeesManagementContext> options) : base(options)
        { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Manager> Managers { get; set; }
    }
}