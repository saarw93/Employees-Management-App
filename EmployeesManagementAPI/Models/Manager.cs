using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesManagementAPI.Models
{
    public class Manager
    {
        [Key]
        public int ManagerID { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "varchar(9)")]
        public string ID { get; set; }
    }
}