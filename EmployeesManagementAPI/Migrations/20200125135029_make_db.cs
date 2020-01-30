using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeesManagementAPI.Migrations
{
    public partial class make_db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ManagerID",
                table: "Employees",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(9)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ManagerID",
                table: "Employees",
                type: "varchar(9)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
