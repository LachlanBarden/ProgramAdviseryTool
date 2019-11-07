
USE MASTER
	GO
	IF DB_ID ('PAT') IS NOT NULL				-- Check if it already exists and drop if it is
	DROP DATABASE PAT;
	GO
	CREATE DATABASE PAT;						-- Create database
	GO

DROP TABLE Program								-- Drop Program table
DROP TABLE Major								-- Drop major table
DROP TABLE Course								-- Drop Course table
DROP TABLE Administrator					    -- Drop Admin table

GO 

CREATE TABLE Program (							
-- Creates Program Table
	programID char(8) unique not null,
	programName text not null,
	unitsRequired smallint not null,
	maxYears tinyint not null,
Primary Key (programID)
)

CREATE TABLE Major ( -- Creates Major Table
	majorID char(8) unique not null,
	majorName text not null,
Primary Key (majorID),
--Foreign Key (programID) References Program(programID),
--Foreign Key (courseID) References Course(courseID)
)

CREATE TABLE Course ( -- Creates Course Table
	courseID char(15) unique not null,
	courseName text not null,
	unitValue tinyint not null,
	courseLevel smallint not null,
	priorityLevel tinyint null,
	--semAvail tinyint null, -- leaving this out to simplify inital system
	preRequisite char(50) null, -- may not have any
	equivalent varchar(50) null, -- may not have any
	activeStatus text, -- allows for course redundancy
	mandatory int null,
	majorID varchar(20),
Primary key (courseID),

)
DROP TABLE Administrator 
CREATE TABLE Administrator ( -- Creates table for Admin
	adminID int not null, --system generated ID
	fName text not null,
	mName text null, -- for people with three names
	lName text not null,
	clearanceLevel smallint not null,
Primary key (adminID)
)

--Populate Program table with data
INSERT INTO Program (
	programID,
	programName,
	unitsRequired,
	maxYears
)

VALUES
	('INFT0001', 'Bachelor of Information Technology', 240, 3),
	('NURS0001', 'Bachelor of Nursing', 240, 3);
GO

SELECT * FROM Program -- Test that data has been inserted into Progaram
SELECT * FROM Major -- Test that data has been inserted into Major
SELECT * FROM Course -- Test that data has been inserted into Course


Select * From DataDump

Drop Table DataDump

DROP Table Course


INSERT INTO Course(courseID, courseName, unitValue, courseLevel, preRequisite, equivalent, mandatory, priorityLevel, MajorID)
	Select [COURSEID], [COURSE_NAME], [UNITS], [LEVEL], [PRE_REQUISITES], [EQUIVELANT], [Required], [Priority_Level], [majorID]
	From database_data
Select * From database_data

	Select * From Course
	Select* From Major
	Select * From Administrator
