USE [master]
GO
/****** Object:  Database [EmployeesManagement]    Script Date: 30-Jan-20 1:34:27 AM ******/
CREATE DATABASE [EmployeesManagement]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EmployeesManagement', FILENAME = N'E:\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\EmployeesManagement.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'EmployeesManagement_log', FILENAME = N'E:\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\EmployeesManagement_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [EmployeesManagement] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EmployeesManagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EmployeesManagement] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EmployeesManagement] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EmployeesManagement] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EmployeesManagement] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EmployeesManagement] SET ARITHABORT OFF 
GO
ALTER DATABASE [EmployeesManagement] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EmployeesManagement] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EmployeesManagement] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EmployeesManagement] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EmployeesManagement] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EmployeesManagement] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EmployeesManagement] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EmployeesManagement] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EmployeesManagement] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EmployeesManagement] SET  DISABLE_BROKER 
GO
ALTER DATABASE [EmployeesManagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EmployeesManagement] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EmployeesManagement] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EmployeesManagement] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EmployeesManagement] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EmployeesManagement] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [EmployeesManagement] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EmployeesManagement] SET RECOVERY FULL 
GO
ALTER DATABASE [EmployeesManagement] SET  MULTI_USER 
GO
ALTER DATABASE [EmployeesManagement] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EmployeesManagement] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EmployeesManagement] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EmployeesManagement] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EmployeesManagement] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'EmployeesManagement', N'ON'
GO
ALTER DATABASE [EmployeesManagement] SET QUERY_STORE = OFF
GO
USE [EmployeesManagement]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 30-Jan-20 1:34:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 30-Jan-20 1:34:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[ID] [varchar](9) NOT NULL,
	[ManagerID] [int] NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Managers]    Script Date: 30-Jan-20 1:34:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Managers](
	[ManagerID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[ID] [varchar](9) NOT NULL,
 CONSTRAINT [PK_Managers] PRIMARY KEY CLUSTERED 
(
	[ManagerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200125132629_InitialCreate', N'3.1.1')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200125134323_Initial_Creation', N'3.1.1')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200125135029_make_db', N'3.1.1')
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (1, N'Alisson', N'Becker', N'123456789', 1)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (2, N'Virgil', N'Van Dijk', N'987654321', 1)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (3, N'Lionel', N'Messi', N'101010101', 3)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (4, N'Sergio', N'Ramos', N'424414474', 2)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (6, N'Roberto', N'Firmino', N'993993456', 1)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (7, N'Chandler', N'Bing', N'314522847', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (8, N'Ross', N'Geller', N'483763491', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (9, N'Joey', N'Tribiani', N'539640214', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (10, N'Antoine', N'Grizmann', N'126578556', 3)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (11, N'Tony', N'Kroos', N'542986522', 2)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (12, N'Jordan', N'Henderson', N'141481414', 1)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (13, N'Karim', N'Benzema', N'459632917', 2)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (14, N'Jerard', N'Pique', N'573945687', 3)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (15, N'Cristiano', N'Ronaldo', N'779779779', 4)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (16, N'Rachel ', N'Green', N'453457658', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (22, N'Paulo', N'Dybala', N'633856339', 4)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (24, N'Phoebe', N'Buffay', N'283574234', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (26, N'Gigi', N'Buffon', N'153792455', 4)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (27, N'Monica', N'Geller', N'541352098', 5)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (28, N'John', N'Snow', N'134298721', 6)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (29, N'Arya', N'Stark', N'541378126', 6)
INSERT [dbo].[Employees] ([EmployeeID], [Name], [LastName], [ID], [ManagerID]) VALUES (30, N'Tyrion', N'Lannister', N'214350103', 6)
SET IDENTITY_INSERT [dbo].[Employees] OFF
SET IDENTITY_INSERT [dbo].[Managers] ON 

INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (1, N'Jurgen', N'Klopp', N'545454545')
INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (2, N'Zinadine', N'Zidane', N'557834559')
INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (3, N'Kike', N'Stein', N'673456321')
INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (4, N'Maurisio', N'Sari', N'749632189')
INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (5, N'David', N'Crane', N'327541986')
INSERT [dbo].[Managers] ([ManagerID], [Name], [LastName], [ID]) VALUES (6, N'David', N'Benioff', N'698451032')
SET IDENTITY_INSERT [dbo].[Managers] OFF
USE [master]
GO
ALTER DATABASE [EmployeesManagement] SET  READ_WRITE 
GO
