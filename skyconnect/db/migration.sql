
--Creates Roles Table
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--Creates User Table
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserFirstName] [varchar](50) NOT NULL,
	[UserLastName] [varchar](50) NOT NULL,
	[UserEmail] [varchar](50) NOT NULL,
	[UserPhoneNumber] [varchar](50) NOT NULL,
	[UserName] [varchar](15) NOT NULL,
	[UserPassword] [varchar](50) NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--Adds Table Constraints
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

--Add Flight Status Table
CREATE TABLE [dbo].[FlightStatus](
	[FlightStatusId] [int] IDENTITY(1,1) NOT NULL,
	[FlightStatus] [varchar](50) NOT NULL
) ON [PRIMARY]
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
           ([UserFirstName]
           ,[UserLastName]
           ,[UserEmail]
           ,[UserPhoneNumber]
           ,[UserName]
           ,[UserPassword]
           ,[RoleId])
     VALUES
           ('User1FN',
           'User1LN'
           ,'User1@pretend.mail.com'
           ,'111-111-1111'
           ,'User1'
           ,'password'
           ,1)
GO

INSERT INTO [dbo].[Users]
           ([UserFirstName]
           ,[UserLastName]
           ,[UserEmail]
           ,[UserPhoneNumber]
           ,[UserName]
           ,[UserPassword]
           ,[RoleId])
     VALUES
           ('Admin2FN',
           'Admin2LN'
           ,'Admin1@pretend.mail.com'
           ,'222-222-2222'
           ,'Admin2'
           ,'password'
           ,2)
GO

INSERT INTO [dbo].[Users]
           ([UserFirstName]
           ,[UserLastName]
           ,[UserEmail]
           ,[UserPhoneNumber]
           ,[UserName]
           ,[UserPassword]
           ,[RoleId])
     VALUES
           ('Agent1FN',
           'Agent1LN'
           ,'Agent1@pretend.mail.com'
           ,'444-444-4444'
           ,'Agent1'
           ,'password'
           ,3)
GO

INSERT INTO [dbo].[Users]
           ([UserFirstName]
           ,[UserLastName]
           ,[UserEmail]
           ,[UserPhoneNumber]
           ,[UserName]
           ,[UserPassword]
           ,[RoleId])
     VALUES
           ('Agent2FN',
           'Agent2LN'
           ,'Agent2@pretend.mail.com'
           ,'222-444-4444'
           ,'Agent2'
           ,'password'
           ,3)
GO

INSERT INTO [dbo].[Users]
           ([UserFirstName]
           ,[UserLastName]
           ,[UserEmail]
           ,[UserPhoneNumber]
           ,[UserName]
           ,[UserPassword]
           ,[RoleId])
     VALUES
           ('Agent3FN',
           'Agent3LN'
           ,'Agent3@pretend.mail.com'
           ,'333-444-4444'
           ,'Agent3'
           ,'password'
           ,3)
GO

--Populate Status Table
USE [SkyConnect]
GO

INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('On Time')
GO

INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('Departed')
GO

INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('Boarding')
GO


INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('Delayed')
GO

INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('Landed')
GO

INSERT INTO [dbo].[FlightStatus]
           ([FlightStatus])
     VALUES
           ('Cancelled')
GO









