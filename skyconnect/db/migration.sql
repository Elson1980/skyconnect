
---If Tables Exist Proceed with 1 and 2
/*** 1. Alter Table to drop constraints

--TER TABLE [dbo].[Users] DROP CONSTRAINT [FK_UserToRole]
--

--ALTER TABLE [dbo].[Roles] DROP CONSTRAINT [FK_RoleId]
--GO

/***2. op Tables if they exist ***/


--IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Roles]') AND type in (N'U'))
--DROP TABLE [dbo].[Roles]
--GO

--IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Users]') AND type in (N'U'))
--DROP TABLE [dbo].[Users]
--GO
--Create the Database

CREATE DATABASE [SkyConnect]  (EDITION = 'GeneralPurpose', SERVICE_OBJECTIVE = 'GP_S_Gen5_2', MAXSIZE = 32 GB) WITH CATALOG_COLLATION = SQL_Latin1_General_CP1_CI_AS, LEDGER = OFF;
GO

ALTER DATABASE [SkyConnect] SET  READ_WRITE 
GO


---Creates Role Table
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


----Creates User Table
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[UserPassword] [varchar](50) NOT NULL,
	[UserEmail] [varchar](50) NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

---Adds Table Constraints
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_UserToRole] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO

ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_UserToRole]
GO

ALTER TABLE [dbo].[Roles]  WITH CHECK ADD  CONSTRAINT [FK_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO

ALTER TABLE [dbo].[Roles] CHECK CONSTRAINT [FK_RoleId]
GO


---Add Roles to Role Table

USE [SkyConnect]
GO

INSERT INTO [dbo].[Roles]
           ([RoleName])
     VALUES
           ('User')
GO

INSERT INTO [dbo].[Roles]
           ([RoleName])
     VALUES
           ('Administrator')
GO

INSERT INTO [dbo].[Roles]
           ([RoleName])
     VALUES
           ('Agent')
GO

--Add Users to Users Table

USE [SkyConnect]
GO

INSERT INTO [dbo].[Users]
           ([UserName]
           ,[UserPassword]
           ,[UserEmail]
           ,[RoleId])
     VALUES
           ('User1',
           'password',
           'pretend1@mail.mil',
            1)
GO

INSERT INTO [dbo].[Users]
           ([UserName]
           ,[UserPassword]
           ,[UserEmail]
           ,[RoleId])
     VALUES
           ('Admin1',
           'password',
           'pretend2@mail.mil',
            2)
GO

INSERT INTO [dbo].[Users]
           ([UserName]
           ,[UserPassword]
           ,[UserEmail]
           ,[RoleId])
     VALUES
           ('Agent1',
           'password',
           'pretend3@mail.mil',
            3)
GO

